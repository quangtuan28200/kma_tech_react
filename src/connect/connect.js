import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyDW6p3jo5zIO1ssZS-tg26J_0rC81LHEUU",
    authDomain: "kma-tech-react.firebaseapp.com",
    databaseURL: "https://kma-tech-react-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kma-tech-react",
    storageBucket: "kma-tech-react.appspot.com",
    messagingSenderId: "336141849671",
    appId: "1:336141849671:web:ef9504bea2116bab004d62",
    measurementId: "G-LLK1WDX8KV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const getDataTable = {
    category: firebase.database().ref('category'),
    brand: firebase.database().ref('brand'),
}

export default getDataTable