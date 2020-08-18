import { TemplatePlugin } from '@/types/utools';
import helloNone from './features/helloNone';
import helloList from './features/helloList';
import helloDoc from './features/helloDoc';

// utools.onPluginEnter(params => {
//   Hello.sayHello();
// });

const preload: TemplatePlugin = {
  utools_tmpl_hello_none: helloNone,
  utools_tmpl_hello_list: helloList,
  utools_tmpl_hello_doc: helloDoc,
};

window.exports = preload;
