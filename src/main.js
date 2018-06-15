import Vue from 'vue'
import Top_M from './VUE_INDEX/Top_M.vue'
import Center_M from './VUE_INDEX/Center_M.vue'
import Bottom_M from './VUE_INDEX/Bottom_M.vue'
import Top_E from './VUE_EventPlatform/Top_E.vue'
import Center_E from './VUE_EventPlatform/Center_E.vue'
import Bottom_E from './VUE_EventPlatform/Bottom_E.vue'

new Vue({
  el: '#TOP_M',
  render: h => h(Top_M)
})
new Vue({
  el: '#CENTER_M',
  render: h => h(Center_M)
})
new Vue({
  el: '#BOTTOM_M',
  render: h => h(Bottom_M)
})

new Vue({
  el: '#TOP_E',
  render: h => h(Top_E)
})
new Vue({
  el: '#CENTER_E',
  render: h => h(Center_E)
})
new Vue({
  el: '#BOTTOM_E',
  render: h => h(Bottom_E)
})