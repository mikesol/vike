export { preview }

import type { Options } from './utils.js'

async function preview(options: Options = {}) {
  const { preview: previewVite } = await import('vite')
  const { resolveConfig, isVikeCliCall } = await import('./utils.js')
  // Adds vike to viteConfig if not present
  const { viteConfig, viteConfigResolved: resolvedConfig } = await resolveConfig(options, 'preview')
  if (!isVikeCliCall()) return previewVite(viteConfig)

  const { default: pc } = await import('@brillout/picocolors')
  try {
    const server = await previewVite(viteConfig)
    server.printUrls()
    server.bindCLIShortcuts({ print: true })
    return server
  } catch (e: any) {
    resolvedConfig.logger.error(pc.red(`error when starting preview server:\n${e.stack}`), {
      error: e
    })
    process.exit(1)
  }
}
