module.exports = {
    transpileDependencies: ['vuetify'],
    // publicPath: process.env.NODE_ENV === 'production' ? '/web/' : '/'
    publicPath: '/homepage/',
    devServer: {
        //     host: '0.0.0.0',
        //     port: '8085',
        //     hot: true,

        disableHostCheck: true,
    },
}
