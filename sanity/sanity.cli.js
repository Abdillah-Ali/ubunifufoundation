import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'kbbqk3r8',
    dataset: 'production',
    studioHost: 'ubunifu-foundation'
  },
  /**
   * Optimize build for memory-constrained environments
   */
  vite: (config) => ({
    ...config,
    build: {
      ...config.build,
      sourcemap: false,
      minify: false, // Disabling minification reduces memory usage of the bundler
      commonjsOptions: {
        include: [/node_modules/],
      },
    },
  }),
})
