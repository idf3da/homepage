import Vue from 'vue'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import VueTypedJs from 'vue-typed-js'

import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueTypedJs)
Vue.use(VueAnimateOnScroll)

    new Vue({vuetify, render: h => h(App)})
        .$mount('#app')
