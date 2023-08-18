import { App, Plugin } from 'vue';
import Tag from './src/index.vue';

export const TagPlugin: Plugin = {
  install(app: App) {
    app.component('ms_tag', Tag);
  },
};

export {
  Tag,
};
