import { defineConfig } from 'umi';

console.log('staging');

export default defineConfig({
  define: {
    G_API_URL: 'https://www.baidu.com',
  },
});
