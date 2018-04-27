import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const Login = r => require.ensure([], () => (require('./../page/admin/login.vue')), 'admin');
const Index = r => require.ensure([], () => (require('./../page/index.vue')), 'admin');
const Farm = r => require.ensure([], () => (require('./../page/farm/farm.vue')), 'camera');
const Aquatic = r => require.ensure([], () => (require('./../page/aquatic/Aquatic.vue')), 'camera');

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/farm' },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'farm',
          component: Farm
        },
        {
          path: 'aquatic',
          component: Aquatic
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
