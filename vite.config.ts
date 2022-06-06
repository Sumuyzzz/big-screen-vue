import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxToViewport from "postcss-px-to-viewport"
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons({
    // expiremental
    autoInstall: true,
  })],
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
  }
})
