import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBcbxZm89FHx4eZvnpqM324j9TChoVzEzY',
    authDomain: 'drcafe-react-app.firebaseapp.com',
    projectId: 'drcafe-react-app',
    storageBucket: 'drcafe-react-app.appspot.com',
    messagingSenderId: '127774490034',
    appId: '1:127774490034:web:bf4e2afc94363a3c5638ab',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
