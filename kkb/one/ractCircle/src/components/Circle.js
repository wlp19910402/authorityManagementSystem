
import { defineComponent, h } from '@vue/runtime-core'

//template -最终渲染到-> render函数
export default defineComponent({
  // setup
  render () {
    const vnode = h("circle", { x: 200, y: 200 })
    return vnode;
  }
})
