const webpack = require("webpack");

let commitHash;

try {
  commitHash = require('child_process')
    .execSync('git rev-parse --short HEAD')
    .toString() || "unknown";
} catch (e) {
  commitHash = "unknown"
}

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer: {
    proxy: {
      "/PenguinStats": {
        target: "https://penguin-stats.io/"
      }
    }
  },
  integrity: true,
  runtimeCompiler: true,
  pwa: {
    name: "企鹅物流数据统计",
    themeColor: "#2d66ba",
    msTileColor: "#1d499b",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",

    workboxPluginMode: "GenerateSW",
    iconPaths: {
      favicon32: 'favicon/favicon-32x32.png',
      favicon16: 'favicon/favicon-16x16.png',
      appleTouchIcon: 'favicon/apple-touch-icon.png',
      maskIcon: 'favicon/safari-pinned-tab.svg',
      msTileImage: 'favicon/mstile-150x150.png'
    }
  },
  transpileDependencies: [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        GIT_COMMIT: JSON.stringify(commitHash).trim()
      }),
    ],
  },
};
