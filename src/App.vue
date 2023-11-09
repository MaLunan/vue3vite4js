<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-link to="HelloWord">hello</router-link>
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue'; // 导入 Vue 3 的对应模块
// import { domTitle, setDocumentTitle } from '@/utils/domUtil';

const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

// 使用生命周期钩子函数和响应式数据
export default {
  setup() {
    const locale = ref(null); // 声明一个响应式数据

    // 只是为了切换语言时，更新标题
    // const updateLocale = () => {
    //   const { title } = $route.meta;
    //   title && (setDocumentTitle(`${i18nRender(title)} - ${domTitle}`));
    //   locale.value = $i18n.getLocaleMessage($store.getters.lang).antLocale;
    // };

    // 使用 onMounted 注册 mounted 钩子
    onMounted(() => {
      const _ResizeObserver = window.ResizeObserver;
      window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
        constructor(callback) {
          callback = debounce(callback, 16);
          super(callback);
        }
      };
    });

    // 使用 onBeforeUnmount 注册 beforeUnmount 钩子
    onBeforeUnmount(() => {
      window.ResizeObserver = _ResizeObserver; // 恢复原始的 ResizeObserver
    });

    // 返回需要在模板中使用的数据和方法
    return { locale};
  }
};
</script>