import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    ViteComponents({
      dirs: ['src'],
      dts: true,
    }),
    WindiCSS({
      config: {
        attributify: true,
      },
    }),
  ],
})
