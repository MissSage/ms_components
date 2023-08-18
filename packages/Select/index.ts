import { App, Plugin } from 'vue';
import Select from './src/index.vue';

export const SelectPlugin: Plugin = {
  install(app: App) {
    app.component('ms_select', Select);
  },
};

export {
  Select,
};
