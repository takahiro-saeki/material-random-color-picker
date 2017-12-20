import resolve from 'rollup-plugin-node-resolve';
import babelrc from 'babelrc-rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/js/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel(babelrc()),
    uglify()
  ]
}