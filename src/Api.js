import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import FireBaseConfig from './FireBaseConfig';

const firebaseApp = firebase.initializeApp(FireBaseConfig);
const db = firebaseApp.firestore();