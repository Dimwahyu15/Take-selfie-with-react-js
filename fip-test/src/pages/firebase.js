import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBT1PrmSZpgkhEi8wV6tyH-dGagStLiXug",
    authDomain: "fip-test.firebaseapp.com",
    projectId: "fip-test",
    storageBucket: "fip-test.appspot.com",
    messagingSenderId: "143829805690",
    appId: "1:143829805690:web:e4e6ec8ebb9ede3a26e9c3",
    measurementId: "G-0D5CK55JH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);