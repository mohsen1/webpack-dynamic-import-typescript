import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: {
        main: './index.ts',
    },
    output: {
        path: 'dist',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: '_import(',
                            replace: 'import(',
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            silent: true,
                            // compilerOptions,
                        },
                    },
                ]
            }
        ]
    }
};

export default config;
