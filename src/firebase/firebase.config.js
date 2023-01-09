import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBL0kpJ7F_cNjgGCZTwBHacbUkGfbhOwDg",
  authDomain: "person-s-resource.firebaseapp.com",
  projectId: "person-s-resource",
  storageBucket: "person-s-resource.appspot.com",
  messagingSenderId: "664116354659",
  appId: "1:664116354659:web:53a2a77c333846b41ce256",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
