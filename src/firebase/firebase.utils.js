import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyDVx4nzXTDk-gqkR2sFgOQGBxjy8kpO7UE",
  authDomain: "clothes-shop-2a53e.firebaseapp.com",
  databaseURL: "https://clothes-shop-2a53e.firebaseio.com",
  projectId: "clothes-shop-2a53e",
  storageBucket: "clothes-shop-2a53e.appspot.com",
  messagingSenderId: "185022780877",
  appId: "1:185022780877:web:5c8c904900930119e4e084",
  measurementId: "G-E880C8YQRS"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;