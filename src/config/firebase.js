import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9cqQf5qLu4qdv2SR3mAFsk6K5qavUCNs",
    authDomain: "acervo-eed8e.firebaseapp.com",
    databaseURL: "https://acervo-eed8e.firebaseio.com",
    projectId: "acervo-eed8e",
    storageBucket: "acervo-eed8e.appspot.com",
    messagingSenderId: "432819294013",
    appId: "1:432819294013:web:7fc74b651797344b567f54"
  };

  export default firebase.initializeApp(firebaseConfig);