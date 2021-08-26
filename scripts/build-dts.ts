import genDefs from './gen-dts'
import path from 'path'

async function gen() {
  const compRoot = path.join(__dirname, '..', 'src')
  await genDefs(compRoot)
}

gen()
