// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import App from 'components/app.vue'
import VueRouter from 'vue-router'
import data from 'stores/getdata'

Vue.use(Vuex)
Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const store = new Vuex.Store({
  modules: {
    data
  }
})
const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App),
  store,
  router
}).$mount(root)