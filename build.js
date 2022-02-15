import path from 'path'
import { rollup } from 'rollup/dist/es/rollup'
import alias from '@rollup/plugin-alias'

const BUILD_FORMAT = {
  UMD: 'umd',
  ESM: 'esm',
}
const { FORMAT } = process.env
const inputOptions = {
  input  : 'packages/index.js',
  plugins: [
    alias({
      entries: [
        { find: '#packages', replacement: path.resolve('packages') },
      ],
    }),
  ],
}
const outputOptions = {
  file  : `lib/fn.${FORMAT}.js`,
  format: FORMAT,
  name  : FORMAT === BUILD_FORMAT.UMD ? 'fn' : '',
}

async function build () {
  const bundle = await rollup(inputOptions)

  // const { output } = await bundle.generate(outputOptions)

  // console.log(output[0])

  await bundle.write(outputOptions)
}

build()
