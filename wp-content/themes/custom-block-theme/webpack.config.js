const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const glob = require('glob-all');

const PATHS = {
  js: path.join(__dirname, 'src', 'js', '**', '*.js'),
  blocks: path.join(__dirname, 'blocks', '**', '*.php'),
  root: path.join(__dirname, '*.php'),
};

console.log('root: ', PATHS.root);
console.log('views: ', PATHS.views);

module.exports = (env, argv) => {
  const mode = argv.mode;
  const isProduction = argv.mode == 'production';

  console.log('argv: ', argv);
  console.log('env: ', env);

  console.log('mode: ', mode);
  console.log('isProduction: ', isProduction);

  return {
    mode: mode,
    devtool: !isProduction && 'source-map',
    stats: {
      loggingDebug: ['sass-loader'],
    },
    entry: {
      index: './src/js/index.js',
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'public'),
      clean: true,
    },
    resolve: {
      alias: {
        '@fonts': path.resolve(__dirname, 'src', 'fonts'),
        '@svg': path.resolve(__dirname, 'src', 'images', 'svg'),
        '@images': path.resolve(__dirname, 'src', 'images'),
        '@splide': path.resolve(
          __dirname,
          'node_modules',
          '@splidejs/splide/src/css'
        ),
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: (pathData) => {
          return pathData.chunk.name === 'index'
            ? 'style.min.css'
            : '[name].min.css';
        },
      }),
      // new CopyPlugin({
      //   patterns: [
      //     { from: "./src/images/favicon/favicon.ico" },
      //     { from: "./src/images/leaflet/marker-icon-2x.png" },
      //     { from: "./src/images/placeholder/*", to: "[name][ext]" },
      //     { from: "./src/images/svg/sprite.svg" },
      //     { from: "./src/js/editor/*.js", to: "[name][ext]" },
      //   ],
      // }),

      // isProduction &&
      //   new PurgeCSSPlugin({
      //     paths: glob.sync(
      //       [`${PATHS.blocks}`, `${PATHS.root}`, `${PATHS.js}`],
      //       { nodir: true }
      //     ),

      //     safelist: {
      //       standard: [
      //         /^collapsing$/,
      //         /^show$/,
      //         /^active$/,
      //         /^hide$/,
      //         /^wp-block$/,
      //       ],
      //       deep: [/splide/, /leaflet/, /dropdown/, /jarallax/],
      //     },
      //   }),
    ],
    optimization: isProduction
      ? {
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                output: {
                  comments: false,
                },
              },
              extractComments: false,
            }),
          ],
        }
      : undefined,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader, // 3. extract css into files
            'css-loader', // 2. Turns css into commonjs
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['postcss-sort-media-queries']],
                },
              },
            },
            'sass-loader', // 1. Turns sass into css
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]',
          },
        },
        {
          test: /\.(png|jpe?g|avif|svg|webp)$/i,
          type: 'asset', // Automatically chooses between inline/resource
          generator: {
            filename: '[name][ext]',
          },
          parser: {
            dataUrlCondition: {
              maxSize: 1 * 1024, // 4kb - files smaller will be inlined
            },
          },
        },

        {
          test: /sprite\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]',
          },
        },
      ],
    },
  };
};
