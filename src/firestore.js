import firebase from 'firebase/app'
import { firebaseConfig } from '../firebase.config.js'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Add database to shorthand db
export const db = firebaseApp.firestore()
