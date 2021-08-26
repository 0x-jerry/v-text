import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      dirs: ['src'],
      globalComponentsDeclaration: true,
    }),
    WindiCSS({
      config: {
        attributify: true,
      },
    }),
  ],
})
