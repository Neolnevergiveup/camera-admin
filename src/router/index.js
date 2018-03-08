import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// const setting = r => require.ensure([], () => r(require('../view/setting/setting.vue')), 'setting')
const Login = r => require.ensure([], () => (require('./../page/admin/login.vue')), 'admin');
const Index = r => require.ensure([], () => (require('./../page/index.vue')), 'admin');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index
    }
  ]
});
