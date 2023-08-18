/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { FooPlugin } from './Foo';
import { InputPlugin } from './Input';
import { CheckboxPlugin } from './Checkbox';
import { SelectPlugin } from './Select';
import { TagPlugin } from './Tag';
import { TreePlugin } from './Tree';

const ms_componentsPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    FooPlugin.install?.(app);
    InputPlugin.install?.(app);
    CheckboxPlugin.install?.(app);
    SelectPlugin.install?.(app);
    TagPlugin.install?.(app);
    TreePlugin.install?.(app);
  },
};

export default ms_componentsPlugin;

export * from './Button'
export * from './Foo'
export * from './Input'
export * from './Checkbox'
export * from './Select'
export * from './Tag'
export * from './Tree'