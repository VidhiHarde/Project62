import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyDb-uvMjwKVkH0ePoefYHMArfYdiqnL9YE",
    authDomain: "newsletter-83a20.firebaseapp.com",
    databaseURL: "https://newsletter-83a20-default-rtdb.firebaseio.com",
    projectId: "newsletter-83a20",
    storageBucket: "newsletter-83a20.appspot.com",
    messagingSenderId: "214093123704",
    appId: "1:214093123704:web:2d9c955e08b56ee6c29d8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();