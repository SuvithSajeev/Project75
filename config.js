import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBgoUdoAwUimMdmMR5wj_L8Lmo3gMOrANw",
  authDomain: "project-71-79902.firebaseapp.com",
  projectId: "project-71-79902",
  storageBucket: "project-71-79902.appspot.com",
  messagingSenderId: "715612130197",
  appId: "1:715612130197:web:c4f1d68c4631644c86449c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
