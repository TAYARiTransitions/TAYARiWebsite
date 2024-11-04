import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwpGTmw5rOBfcVeMVnpZpT6cHutVOcs3A",
    authDomain: "tayari-transitions.firebaseapp.com",
    projectId: "tayari-transitions",
    storageBucket: "tayari-transitions.firebasestorage.app",
    messagingSenderId: "291567895900",
    appId: "1:291567895900:web:5091fcb88b80ca0e51ed99"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
