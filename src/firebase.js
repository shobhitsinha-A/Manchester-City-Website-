import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { cityDb } from './temp/m-city-export';

const firebaseConfig = {
    apiKey: "AIzaSyD0j4_ws5w2mqRDS-U95khUS-yPrGwV51E",
    authDomain: "mcity-bba6b.firebaseapp.com",
    projectId: "mcity-bba6b",
    storageBucket: "mcity-bba6b.appspot.com",
    messagingSenderId: "296340501570",
    appId: "1:296340501570:web:55c032f6aadcb278bee9db",
    measurementId: "G-V3F2CGWFLG"
  };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams');

// cityDb.matches.forEach(item => {
//     matchesCollection.add(item)
//   });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });
  export {
    firebase,
    matchesCollection,
    playersCollection,
    positionsCollection,
    promotionsCollection,
    teamsCollection
  }