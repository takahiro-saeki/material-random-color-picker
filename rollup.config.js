import resolve from 'rollup-plugin-node-resolve';
import babelrc from 'babelrc-rollup';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
const dev = []

if(process.env.ROLLUP_ENV === 'development') {
  dev.plugin = [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel(babelrc()),
    serve('dist')
  ]
} else {
  dev.plugin = [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel(babelrc()),
    uglify()
  ]
}

export default {
  input: 'src/js/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: dev.plugin
}