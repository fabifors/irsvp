// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueFirestore from 'vue-firestore'
import firebase from 'firebase'
import { firebaseConfig } from '../firebase.config.js'

require('firebase/firestore')

Vue.use(VueFirestore)

// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebaseApp.firestore()

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
/*
var vm = new Vue({
  el: '#app',
  firestore () {
    return {
        // Collection
        persons: firestore.collection('persons'),
        // Doc
        ford: firestore.collection('cars').doc('ford')
    }
  }
})
*/
