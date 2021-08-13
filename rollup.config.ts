import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';

export default {
  input: `src/index.ts`,
  output: [
    { file: `dist/prefab.umd.js`, name: 'Prefab', format: 'umd', sourcemap: 'inline' },
      {
          file: `dist/prefab.js`,
          format: 'es',
          sourcemap: 'inline',
        },
  ],
  external: [],
  watch: { include: 'src/**' },
  plugins: [
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
};

