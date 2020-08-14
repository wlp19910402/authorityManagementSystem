
import { defineComponent, h } from '@vue/runtime-core'
import Cricle from './components/Circle'
//template -最终渲染到-> render函数
export default defineComponent({
  // setup
  render () {
    const vnode = h("rect", { x: 100, y: 100 }, [ '你干啥的饿啊', h(Cricle) ])
    return vnode;
  }
})
