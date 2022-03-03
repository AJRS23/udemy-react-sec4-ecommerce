import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA9daJKwNiLH3X0pYblcBw5qcPmiaTPJH4",
  authDomain: "crwn-db-d0ad2.firebaseapp.com",
  projectId: "crwn-db-d0ad2",
  storageBucket: "crwn-db-d0ad2.appspot.com",
  messagingSenderId: "493231629027",
  appId: "1:493231629027:web:a2bd546bd0d593016adbd6",
  measurementId: "G-S1JSZQ4QB9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;