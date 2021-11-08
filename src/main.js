import Vue from 'vue'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import VueTypedJs from 'vue-typed-js'

import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueTypedJs)
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
Vue.use(VueAnimateOnScroll)

console.log('TEST')

Vue.directive('vpshow', {
    inViewport(el) {
        var rect = el.getBoundingClientRect()
        return !(
            rect.bottom < 0 || rect.right < 0 ||
            rect.left > window.innerWidth || rect.top > window.innerHeight)
    },

    bind(el, binding) {
        console.log('BEFORE: ', el.classList)
        el.classList.add('before-enter')
        console.log('AFTER: ', el.classList)
        el.$onScroll = function() {
            if (binding.def.inViewport(el)) {
                el.classList.add('enter')
                el.classList.remove('before-enter')
                binding.def.unbind(el, binding)
            }
        };
        document.addEventListener('scroll', el.$onScroll)
    },

    inserted(el, binding) {
        binding
        el.$onScroll()
    },

    unbind(el, binding) {
        binding
        document.removeEventListener('scroll', el.$onScroll);
        delete el.$onScroll
    }
});

new Vue({vuetify, render: h => h(App)}).$mount('#app')
