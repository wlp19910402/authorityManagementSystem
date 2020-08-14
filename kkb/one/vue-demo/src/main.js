import { createApp } from 'vue';
import App from './App.vue'


//vnode虚拟dom -> 转成真正的dom -> 挂载到根容器里面
//转成真正的dom 调用平台的渲染接口 Renderer
createApp(App).mount('#app')