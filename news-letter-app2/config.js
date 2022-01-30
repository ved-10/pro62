import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv7kUkOarrwPN7Vu6WdAvjaTkAM3LLYaE",
  authDomain: "class-58-project.firebaseapp.com",
  databaseURL: "https://class-58-project-default-rtdb.firebaseio.com",
  projectId: "class-58-project",
  storageBucket: "class-58-project.appspot.com",
  messagingSenderId: "546237485093",
  appId: "1:546237485093:web:c2f010b8c75d018ed4afcc",
  measurementId: "G-3XYDLW9CST"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();

  