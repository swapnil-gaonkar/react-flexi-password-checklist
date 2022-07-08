import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssURL from 'postcss-url';
import { terser } from 'rollup-plugin-terser';

export default [{

    input : 'src/index.js',
    output: [{
        file: 'dist/index.js',
        format: 'cjs',
    },
    {
        file: 'dist/index.es.js',
        format: 'esm',
        exports: 'named',
    }],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        external(),
        resolve(),
        postcss({
            inject: true,
            plugins: [
                postcssURL({
                  url: 'inline',
                })
            ],
        }),
        terser()
    ]
}];