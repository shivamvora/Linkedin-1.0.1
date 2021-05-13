import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCyipuCrzm81hc6ifEkiKmiR8cG9kC8I-4",
    authDomain: "dummy-linkedin-clone-ca745.firebaseapp.com",
    projectId: "dummy-linkedin-clone-ca745",
    storageBucket: "dummy-linkedin-clone-ca745.appspot.com",
    messagingSenderId: "805526211135",
    appId: "1:805526211135:web:5007851c2868ce0843068a"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = firebase.storage(); 

  export { auth, provider,storage };
  export default db;