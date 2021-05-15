import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyCyipuCrzm81hc6ifEkiKmiR8cG9kC8I-4",
//     authDomain: "dummy-linkedin-clone-ca745.firebaseapp.com",
//     projectId: "dummy-linkedin-clone-ca745",
//     storageBucket: "dummy-linkedin-clone-ca745.appspot.com",
//     messagingSenderId: "805526211135",
//     appId: "1:805526211135:web:5007851c2868ce0843068a"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDdu94MuG6MH5AF-E2ys1ImMXvJYWl7al0",
  authDomain: "linkedin-1-41c44.firebaseapp.com",
  projectId: "linkedin-1-41c44",
  storageBucket: "linkedin-1-41c44.appspot.com",
  messagingSenderId: "177294270101",
  appId: "1:177294270101:web:44b10394b6093dbc0f059c",
  measurementId: "G-EG9TW19425"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = firebase.storage(); 

  export { auth, provider,storage };
  export default db;