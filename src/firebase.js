import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBLJRQIeerMzE0lg0738BsROdb8xq5-Ynw",
    authDomain: "todoist-clone-203b6.firebaseapp.com",
    databaseURL: "https://todoist-clone-203b6.firebaseio.com",
    projectId: "todoist-clone-203b6",
    storageBucket: "todoist-clone-203b6.appspot.com",
    messagingSenderId: "477433686748",
    appId: "1:477433686748:web:75c97e92a676720212a219"
});

export {firebaseConfig as firebase}