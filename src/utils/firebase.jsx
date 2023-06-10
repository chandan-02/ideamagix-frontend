import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAnLwxqEHK3hH628JckpXzyyMNLmB6d-wc",
    authDomain: "assignment-56702.firebaseapp.com",
    projectId: "assignment-56702",
    storageBucket: "assignment-56702.appspot.com",
    messagingSenderId: "993222273694",
    appId: "1:993222273694:web:8bce4fe4eefc407c8fe98f",
    measurementId: "G-RDNJD717F5"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };