import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxToViewport from "postcss-px-to-viewport"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),

  ],
  base:'big-screen-vue',
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  },
  css: {
    postcss: {
      plugins: [postcssPxToViewport({
        viewportWidth: 1920,
        fontViewportUnit: 'vw',
        exclude: [/node_modules/, /\/src\/assets\//, /index.html/],
      })]
    }
  },

})
