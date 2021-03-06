'use strict'
const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const chalk = require('chalk')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

exports.getEntry = () => {
  const rootSrc = resolve('src')
  const pattern = './**/*.page.js'
  let files = glob.sync(path.resolve(rootSrc, pattern))
  if (!files.length) {
    console.log(chalk.red('缺少页面文件 *.page.js'));
    process.exit(1);
  }
  return files.reduce((res, file) => {
    var info = path.parse(file)
    var key = info.dir === rootSrc ? info.name.replace('.page', '') : (info.dir.slice(rootSrc.length + 1) + '/' + info.name.replace('.page', ''))
    res[key] = [
      require.resolve('./polyfills'),
      path.resolve(file)
    ]
    if (process.env.NODE_ENV === 'development') {
      res[key].push(require.resolve('react-dev-utils/webpackHotDevClient'))
    }
    return res
  }, {})
}

exports.createHtmlWebpackPlugin = (publicModule) => {
  let entry = exports.getEntry()
  let entries = Object.keys(entry)
  let plugins = []
  let conf
  publicModule = publicModule || []

  entries.forEach(key => {
    let template
    let page
    let pattern = /.page.js$/g
    entry[key].map((item) => {
      if (pattern.test(item)) {
        page = item
      }
    })
    if (fs.existsSync(page.replace('.page.js', '.html'))) {
      template = './src/' + key + '.html'
    } else {
      template = 'public/index.html'
    }
    conf = {
      template,
      filename: key + '.html',
      inject: true,
      chunks: key ? [key] : []
    }
    if (process.env.NODE_ENV !== 'development') {
      conf.chunksSortMode = 'dependency'
      conf.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
      // 在构建生产环境时，需要指定共用模块
      conf.chunks = [...publicModule, ...conf.chunks]
    }

    plugins.push(new HtmlWebpackPlugin(conf))
  })
  return plugins
}
