# V Text

Vue UI Library.

## Usage

Use with `vite-plugin-components`.

Modify `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import { VTextResolver } from '@0x-jerry/v-text/vite-components-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [VTextResolver()],
    }),
  ],
})
```
