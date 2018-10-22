const path = require('path');
const webpack = require('webpack');

/****************************************************
 * config entry
 ***************************************************/
const entry = {};

// ./src/index.ts
entry.app = [`./src/LoggerWeb.ts`];

/****************************************************
 * config output
 ***************************************************/
const output = {};
output.publicPath = './';
output.path = path.resolve(__dirname);
output.filename = `index.js`;
output.libraryTarget = 'commonjs2';

/****************************************************
 * config resolve
 ***************************************************/
const resolve = {
  extensions: [".ts", ".tsx", ".js"],
  alias: {
    'src': path.resolve('src'),
  }
};

/****************************************************
 * config module
 ***************************************************/
const moduleOptions = {
  rules: []
};

//typescript
//----------------
// ts
moduleOptions.rules.push({
  test: /\.(ts|tsx)$/,
  exclude: /kirin-strap\/node_modules/,
  loader: 'ts-loader',
  options: {
    allowTsInNodeModules: true
  }
});

// tslint
// moduleOptions.rules.push({
//   test: /\.(ts|tsx)$/,
//   enforce: 'pre',
//   exclude: /node_modules/,
//   loader: 'tslint-loader',
// });


/****************************************************
 * config plugins
 ***************************************************/
const plugins = [];
// plugins.push(new webpack.DefinePlugin()};

/****************************************************
 * config target
 ***************************************************/
const mode = process.env.NODE_ENV;

const webpackConfig = {entry, mode, output,
  module: moduleOptions, resolve, plugins,
};

/*
const buildList = [
  {
    entry: './src/logger/index.ts',
    output: 'logger.js',
  }
];
//*/


const buildList = [
  {
    entry: './src/LoggerWeb.ts',
    output: 'logger-web.js',
    target: 'web'
  },
  {
    entry: './src/LoggerNode.ts',
    output: 'logger-node.js',
    target: 'node'
  },
];
//*/
let buildIndex = 0;
function build (buildOption) {
  buildIndex++;
  webpackConfig.entry.app = [buildOption.entry];
  webpackConfig.output.filename = buildOption.output;
  webpackConfig.target = buildOption.target;
  webpack(webpackConfig, ( error, stats ) => {
    // error
    if( error ) throw error;
    // config of output style
    const outputConfig        = {};
    outputConfig.colors       = true;
    outputConfig.modules      = false;
    outputConfig.chunks       = false;
    outputConfig.chunkModules = false;
    // output stats
    process.stdout.write( `${stats.toString( outputConfig )}\n` );
    if ( buildIndex === buildList.length ) { process.exit(); }

    build(buildList[buildIndex]);
  });
}

build(buildList[buildIndex]);