import resolve from 'rollup-plugin-node-resolve';
import babelrc from 'babelrc-rollup';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'dev/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel(babelrc()),
    serve('dist')
  ]
}