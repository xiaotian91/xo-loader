import xoLoader from './lib/index.vue';

const xoloader = {
  install:function (Vue) {
    Vue.component('xoLoader',xoLoader)
  }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xoloader)
}
export default xoloader