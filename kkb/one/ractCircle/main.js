import { createApp } from './src/runtime-canvas'
import App from './src/App.js'
import { getRootContainer } from './src/Game'

//1.创建根组件 App
//2.创建根容器 pixi.js
// createApp(rootComponent).mount(rootContainer)
// console.log(renderer)

createApp(App).mount(getRootContainer())

