import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Cleave from 'cleave.js'

Vue.config.productionTip = false
function getInput(el) {
  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    const els = el.getElementsByTagName('input')
    if (els.length !== 1) {
      throw new Error(`v-cleave requires 1 input, found ${els.length}`)
    } else {
      el = els[0]
    }
  }
  return el
}

Vue.directive('cleave', {
  inserted: (el, binding) => {
    el = getInput(el)
    el.cleave = new Cleave(el, binding.value || {})
  },
  update: el => {
    el = getInput(el)
    const event = new Event('input', { bubbles: true })
    setTimeout(function() {
      el.value = el.cleave.properties.result
      el.dispatchEvent(event)
    }, 100)
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
