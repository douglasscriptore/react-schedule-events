import path from 'path'
import sass from 'rollup-plugin-sass'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

const PACKAGE_ROOT_PATH = process.pwd()

const pkg = require(path.join(PACKAGE_ROOT_PATH, 'package.json'))

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    resolve(),
    sass({ insert: true }),
    typescript({
      rollupCommonJSResolveHack: true,
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: true,
    }),
    commonjs(),
  ],
  external: ['react', 'react-dom'],
}
