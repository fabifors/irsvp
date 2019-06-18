// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueFirestore from 'vue-firestore'

require('firebase/firestore')

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueFirestore)
  Vue.component('Layout', DefaultLayout)
}
