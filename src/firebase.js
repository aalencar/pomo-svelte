import { initializeApp } from "firebase/app"
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyATTLYFL2M1Mza9j8muY5f0sGNbqFBSQgY",
  authDomain: "pomo-svelte.firebaseapp.com",
  projectId: "pomo-svelte",
  storageBucket: "pomo-svelte.appspot.com",
  messagingSenderId: "301701843",
  appId: "1:301701843:web:8354989c0e11b24c805226",
  measurementId: "G-NV306KXZBY"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

connectAuthEmulator(auth, 'http://localhost:9099')

console.log('loaded firebase.js')