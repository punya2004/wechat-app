import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const fire = firebase.initializeApp({
    apiKey: "AIzaSyBwEKp2zSGLsS9eqZTdatUFjDv11L9pl6s",
    authDomain: "web-messenger-8608f.firebaseapp.com",
    projectId: "web-messenger-8608f",
    storageBucket: "web-messenger-8608f.appspot.com",
    messagingSenderId: "768580126114",
    appId: "1:768580126114:web:510040a8ce90a1108e9efb"
});

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default fire;
export {timestamp}