module.exports = ({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target:'http://localhost:3000',
  //       ws:true,
  //       changeOrigin:true,
  //       pathRewrite: {
  //       '^/api': ''}
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), // sử dụng thư viện sass chứ không phải node-sass
      },
    },
  },
});