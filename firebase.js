import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "ISI_PUNYA_KAMU",
  authDomain: "dear-girletterz-ea507.firebaseapp.com",
  projectId: "dear-girletterz-ea507",
  storageBucket: "dear-girletterz-ea507.firebasestorage.app",
  messagingSenderId: "158937216183",
  appId: "1:158937216183:web:39a0fd4738f83ccb3e0932"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
