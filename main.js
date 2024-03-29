import Vue from 'vue'

import router from './router'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUi)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
