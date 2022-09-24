import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDW0Km-JU8veZCQhyNlRrgxADONTvP8B3Q",
  authDomain: "netflix-4cd4f.firebaseapp.com",
  projectId: "netflix-4cd4f",
  storageBucket: "netflix-4cd4f.appspot.com",
  messagingSenderId: "779870908298",
  appId: "1:779870908298:web:337c44932273e36f4fe273",
  measurementId: "G-D7FNTVKCF4"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
