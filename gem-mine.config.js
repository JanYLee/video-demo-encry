const { proxyConfig } = require('./src/config/request/proxy')

module.exports = {
  /**
   * 本地开发时，需要代理转发的请求
   */
  devServer: {
    proxy: proxyConfig
  },
  chainWebpack: (config) => {
    // use webpack-chain
    config.plugin('define')
      .tap((pluginOption) => {
        let sdpEnv
        if (process.env.BUILD_ON_SDP) {
          sdpEnv = 'window.__global_env'
        } else {
          sdpEnv = JSON.stringify(process.env.SDP_ENV)
        }
        pluginOption[0]['process.env'].SDP_ENV = sdpEnv
        return pluginOption
      })
  },
  configureWebpack: {
    // normal webpack config
  },
  // 用于开启多页模式
  // https://githoniel.gitee.io/toolkit-doc/#/zh-cn/api/gms/config/api?id=pages
  pages: {
    home: {
      entry: 'src/page/home',
      template: 'public/home.html',
      filename: 'index.html'
    },
    inner: {
      entry: 'src/page/inner',
      template: 'public/inner.html',
      filename: 'inner.html',
      title: 'Inner Page'
    }
  }
}
