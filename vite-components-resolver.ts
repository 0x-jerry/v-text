import { ComponentResolver } from 'unplugin-vue-components/types'

/**
 * Resolver for V-Text
 *
 */
export function VTextResolver(): ComponentResolver {
  return (name: string) => {
    if (name.match(/^T[A-Z]/))
      return {
        path: `@0x-jerry/v-text/src/${name}.vue`,
      }
  }
}
