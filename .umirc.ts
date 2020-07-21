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
  define: {
    G_API_URL: EnvFlag
      ? ''
      : 'https://www.fastmock.site/mock/7423c30c24358a359ce21770176219ca/ReactDemo',
  },
  base: '/dist',
  publicPath: './',
  // dynamicImport:{}
  // request: false,
});
