module.exports = {
  // 部署应用包时的基本 URL。
  publicPath: "/",
  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  // 指定生成的 common.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: "index.html",
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 common 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 common HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,
  // 生产环境下禁用lint
  // lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: true,
  devServer: {
    host: "0.0.0.0",
    open: false,
    port: 8666, // 自定义修改8080端口
    // 代理跨域
    /*proxy: {
      "/auth": {
        target: SITE_CONFIG.oauthUrl,
        changeOrigin: true,
        pathRewrite: {
          "^/auth": "/",
        },
      },
      "/api": {
        target: SITE_CONFIG.baseUrl,
        changeOrigin: false,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },*/
  },
  css: {
    loaderOptions: {
      less: {
        appendData: `@import "~@/assets/css/_variables.less";`,
      },
    },
  },
};
