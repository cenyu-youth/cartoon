import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//根据屏幕适配rem
import 'lib-flexible/flexible'

import {
  Button,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  NavBar,
  Tab,
  Tabs,
  Toast,
  Overlay,
  NumberKeyboard,
  PasswordInput,
  Notify,
  Uploader,
  Dialog,
} from 'vant';

Vue
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(Overlay)
  .use(NumberKeyboard)
  .use(PasswordInput)
  .use(Notify)
  .use(Uploader)
  .use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
