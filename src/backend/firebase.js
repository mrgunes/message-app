import firebase from 'firebase';

let firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  let firebaseApp=firebase.initializeApp(firebaseConfig);

  let db=firebaseApp.firestore();
  let auth=firebase.auth();
  let provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;