module.exports = {
    proxyList: {
          '/api': {
              // 测试环境
              target: 'https://localhost',  // 接口域名
              changeOrigin: true
            //   pathRewrite: {
            //       '^/apis': ''   //需要rewrite重写的,
            //   }              
          }
    }
  }
