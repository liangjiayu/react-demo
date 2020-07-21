import { defineConfig } from 'umi';

const EnvFlag = process.env.NODE_ENV === 'development';

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
  dynamicImport: {},
  define: {
    G_API_URL: '',
  },
  // base: EnvFlag ? '/' : '/react-demo/dist/',
  history: { type: 'hash' },
  publicPath: './',
  // request: false,
});
