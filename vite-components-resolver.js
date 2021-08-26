import { ComponentResolver } from 'vite-plugin-components'

/**
 * Resolver for V-Text
 *
 * @returns {ComponentResolver}
 */
export function VTextResolver() {
  return (name) => {
    if (name.match(/^T[A-Z]/))
      return {
        path: `@0x-jerry/v-text/src/${name}.vue`,
      }
  }
}
