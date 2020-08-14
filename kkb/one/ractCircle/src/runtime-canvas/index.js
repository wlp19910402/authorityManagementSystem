import { createRenderer } from '@vue/runtime-core'
import { Graphics, Text } from 'pixi.js'
// console.log(PIXI)
const renderer = createRenderer({
  createElement (type) {
    //基于 type 创建基于 canvas 的元素
    console.log(type)
    let element;
    if (type === 'rect') {
      //创建矩形
      element = new Graphics()
      element.beginFill(0xff0000)
      element.drawRect(0, 0, 500, 500)
      element.endFill()
    } else if (type === 'circle') {
      //创建矩形
      element = new Graphics()
      element.beginFill(0xff00ff)
      element.drawCircle(0, 0, 100, 100)
      element.endFill()
    }
    return element;
  },
  setElementText (node, text) {
    const cText = new Text(text);
    node.addChild(cText);
  },
  createText (text) {
    return new Text(text)
  },
  patchProp (el, key, prevValue, nextValue) {
    el[ key ] = nextValue;
  },
  insert (el, parent) {
    console.log(el);
    console.log(parent);
    // append()
    parent.addChild(el);
  },
});


//1.创建根组件 App
//2.创建根容器 pixi.js
// createApp(rootComponent).mount(rootContainer)
// console.log(renderer)

//初始化game

export function createApp (rootComponent) {
  return renderer.createApp(rootComponent);
}