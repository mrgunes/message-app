import firebase from 'firebase';
require('dotenv').config();
let apiKey=process.env.API_KEY;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "message-a7460.firebaseapp.com",
    projectId: "message-a7460",
    storageBucket: "message-a7460.appspot.com",
    messagingSenderId: "952883900225",
    appId: "1:952883900225:web:4ee17bb0c676e665d87bc0"
  };

  let firebaseApp=firebase.initializeApp(firebaseConfig);

  let db=firebaseApp.firestore();
  let auth=firebase.auth();
  let provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;