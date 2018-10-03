import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyBZ1jrLJCGqXgAWO2VoSPGRr5cw-VD7I-s",
  authDomain: "planner-f2897.firebaseapp.com",
  databaseURL: "https://planner-f2897.firebaseio.com",
  projectId: "planner-f2897",
  storageBucket: "planner-f2897.appspot.com",
  messagingSenderId: "4286032242"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
