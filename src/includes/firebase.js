import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJ9Jn8V4bj8XV86C8YdFsPKHmj5suG2lo',
  authDomain: 'music-49b98.firebaseapp.com',
  projectId: 'music-49b98',
  storageBucket: 'music-49b98.appspot.com',
  appId: '1:78748802448:web:f0a214457dd766d65f2715',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
