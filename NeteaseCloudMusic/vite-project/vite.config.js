import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         hack: `true; @import (reference) "${resolve("src/assets/less/index.less")}";`,
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },

})
