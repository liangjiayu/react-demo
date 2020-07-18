import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
    { path: '/detail', component: '@/pages/detail/index' },
    { path: '/form', component: '@/pages/form/index' },
    { path: '/result', component: '@/pages/result/index' },
  ],
  define: {
    'process.env.API_URL': 'baidu.com',
  },
  // request: false,
});
