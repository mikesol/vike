export { prefetch }
export { addLinkPrefetchHandlers }

import {
  assert,
  assertClientRouting,
  assertUsage,
  assertWarning,
  checkIfClientRouting,
  getGlobalObject,
  isExternalLink,
  objectAssign
} from './utils.js'
import {
  type PageContextUserFiles,
  isErrorFetchingStaticAssets,
  loadUserFilesClientSide
} from '../shared/loadUserFilesClientSide.js'
import { skipLink } from './skipLink.js'
import { getPrefetchSettings } from './prefetch/getPrefetchSettings.js'
import { isAlreadyPrefetched, markAsAlreadyPrefetched } from './prefetch/alreadyPrefetched.js'
import { disableClientRouting } from './renderPageClientSide.js'
import { isClientSideRoutable } from './isClientSideRoutable.js'
import { createPageContext } from './createPageContext.js'
import { route, type PageContextFromRoute } from '../../shared/route/index.js'
import { noRouteMatch } from '../../shared/route/noRouteMatch.js'
import { getPageContextFromHooks_isNotHydration } from './getPageContextFromHooks.js'
import { PageContextExports, PageFile } from '../../shared/getPageFiles.js'
import { PageConfigRuntime } from '../../shared/page-configs/PageConfig.js'

assertClientRouting()
const globalObject = getGlobalObject<{
  linkPrefetchHandlerAdded: WeakMap<HTMLElement, true>
  // todo
  pageContext: any
  // todo
}>('prefetch.ts', { linkPrefetchHandlerAdded: new WeakMap(), pageContext: null })

async function prefetchAssets(pageId: string, pageContext: PageContextUserFiles): Promise<void> {
  try {
    await loadUserFilesClientSide(pageId, pageContext._pageFilesAll, pageContext._pageConfigs)
  } catch (err) {
    if (isErrorFetchingStaticAssets(err)) {
      disableClientRouting(err, true)
    } else {
      throw err
    }
  }
}

async function prefetchPageContext(
  pageContext: { _pageId: string } & {
    urlOriginal: string
    _urlRewrite: string | null
    _pageFilesAll: PageFile[]
    _pageConfigs: PageConfigRuntime[]
  } & PageContextExports
): Promise<void> {
  try {
    const pageContextFromHooks = await getPageContextFromHooks_isNotHydration(pageContext, false)
    // todo: getPageContextFromHooks_isNotHydration return does not contains "urlOriginal", "Page".
    // maybe I need to merge with pageContext(props).
    console.log('pageContextFromHooks', pageContextFromHooks)
    globalObject.pageContext = pageContextFromHooks
  } catch (err) {
    if (isErrorFetchingStaticAssets(err)) {
      disableClientRouting(err, true)
    } else {
      throw err
    }
  }
}

/**
 * Programmatically prefetch client assets.
 *
 * https://vike.dev/prefetch
 *
 * @param url - The URL of the page you want to prefetch.
 */
async function prefetch(url: string): Promise<void> {
  assertUsage(checkIfClientRouting(), 'prefetch() only works with Client Routing, see https://vike.dev/prefetch', {
    showStackTrace: true
  })
  const errPrefix = `Cannot prefetch URL ${url} because it` as const
  assertUsage(!isExternalLink(url), `${errPrefix} lives on another domain`, { showStackTrace: true })

  if (isAlreadyPrefetched(url)) return
  markAsAlreadyPrefetched(url)

  const pageContext = await createPageContext(url)
  let pageContextFromRoute: PageContextFromRoute
  try {
    pageContextFromRoute = await route(pageContext)
  } catch {
    // If a route() hook has a bug or `throw render()` / `throw redirect()`
    return
  }
  const pageId = pageContextFromRoute._pageId

  if (!pageId) {
    assertWarning(false, `${errPrefix} ${noRouteMatch}`, {
      showStackTrace: true,
      onlyOnce: false
    })
    return
  }

  await prefetchAssets(pageId, pageContext)
}

function addLinkPrefetchHandlers(pageContext: { exports: Record<string, unknown>; urlPathname: string }) {
  // Current URL is already prefetched
  markAsAlreadyPrefetched(pageContext.urlPathname)

  const linkTags = [...document.getElementsByTagName('A')] as HTMLElement[]
  linkTags.forEach((linkTag) => {
    if (globalObject.linkPrefetchHandlerAdded.has(linkTag)) return
    globalObject.linkPrefetchHandlerAdded.set(linkTag, true)

    const url = linkTag.getAttribute('href')

    if (skipLink(linkTag)) return
    assert(url)

    if (isAlreadyPrefetched(url)) return

    const { prefetchStaticAssets, prefetchPageContext } = getPrefetchSettings(pageContext, linkTag)
    if (!prefetchStaticAssets && !prefetchPageContext) return

    if (prefetchStaticAssets === 'hover') {
      linkTag.addEventListener('mouseover', () => {
        prefetchAssetsIfPossible(url)
      })
      linkTag.addEventListener(
        'touchstart',
        () => {
          prefetchAssetsIfPossible(url)
        },
        { passive: true }
      )
    }

    if (prefetchStaticAssets === 'viewport') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            prefetchAssetsIfPossible(url)
            observer.disconnect()
          }
        })
      })
      observer.observe(linkTag)
    }

    if (prefetchPageContext.when === 'hover') {
      linkTag.addEventListener('mouseover', () => {
        prefetchContextIfPossible(url)
      })
      linkTag.addEventListener(
        'touchstart',
        () => {
          prefetchContextIfPossible(url)
        },
        { passive: true }
      )
    }

    if (prefetchPageContext.when === 'viewport') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            prefetchContextIfPossible(url)
            observer.disconnect()
          }
        })
      })
      observer.observe(linkTag)
    }
  })
}

async function prefetchAssetsIfPossible(url: string): Promise<void> {
  const pageContext = await createPageContext(url)
  let pageContextFromRoute: PageContextFromRoute
  try {
    pageContextFromRoute = await route(pageContext)
  } catch {
    // If a route() hook has a bug or `throw render()` / `throw redirect()`
    return
  }
  if (!pageContextFromRoute?._pageId) return
  if (!(await isClientSideRoutable(pageContextFromRoute._pageId, pageContext))) return
  await prefetchAssets(pageContextFromRoute._pageId, pageContext)
}

async function prefetchContextIfPossible(url: string): Promise<void> {
  const pageContext = await createPageContext(url)
  let pageContextFromRoute: PageContextFromRoute
  try {
    pageContextFromRoute = await route(pageContext)
  } catch {
    // If a route() hook has a bug or `throw render()` / `throw redirect()`
    return
  }
  if (!pageContextFromRoute?._pageId) return
  objectAssign(
    pageContext,
    await loadUserFilesClientSide(pageContextFromRoute._pageId, pageContext._pageFilesAll, pageContext._pageConfigs)
  )
  objectAssign(pageContext, {
    isHydration: false as const,
    isBackwardNavigation: null,
    _hasPageContextFromServer: false as const,
    _hasPageContextFromClient: true as const,
    _pageId: pageContextFromRoute._pageId,
    _pageConfigs: pageContext._pageConfigs
  })
  if (!(await isClientSideRoutable(pageContextFromRoute._pageId, pageContext))) return
  await prefetchPageContext(pageContext)
}
