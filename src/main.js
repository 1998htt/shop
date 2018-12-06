import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/resset.css'
import '@/assets/js/rem.js'
import { NavBar,Icon,Swipe, SwipeItem,Tabbar, TabbarItem, Lazyload } from 'vant';
Vue.use(NavBar).use(Icon).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(Lazyload);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
