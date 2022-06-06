import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxToViewport from "postcss-px-to-viewport"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
