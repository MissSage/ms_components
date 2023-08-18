import { App, Plugin } from 'vue';
import Tree from './src/index.vue';

export const TreePlugin: Plugin = {
  install(app: App) {
    app.component('ms_tree', Tree);
  },
};

export {
  Tree,
};
