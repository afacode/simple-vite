import { foo } from './foo.js'
import {createApp, h} from 'vue'
foo()
console.log('main.js')

createApp(App).mount('#app')

const App = {
  render () {
    return h('div', null, [h('p', null, String(Vite App))])
  }
}

