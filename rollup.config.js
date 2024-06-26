import { babel } from '@rollup/plugin-babel'
import { dts } from "rollup-plugin-dts"
import terser from '@rollup/plugin-terser'

const config = [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/menuy.js',
        format: 'cjs'
      },
      {
        file: 'dist/menuy.esm.js',
        format: 'esm'
      },
      {
        file: 'dist/menuy.umd.js',
        format: 'umd',
        name: 'Menuy'
      }
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**'
      })
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/menuy.min.js',
        format: 'esm',
        sourcemap: true
      },
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**'
      }),
      terser()
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es'
      }
    ],
    plugins: [
      dts(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**'
      })
    ],
  }
]

export default config