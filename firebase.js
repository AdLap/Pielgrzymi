import firebase from 'fireebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8n-wgLlLTlFaOH1JXrh8C_MRX_hYEkTc",
    authDomain: "pbm-movie.firebaseapp.com",
    databaseURL: "https://pbm-movie-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pbm-movie",
    storageBucket: "pbm-movie.appspot.com",
    messagingSenderId: "310172673952",
    appId: "1:310172673952:web:a0eac954e83152f000a6c5"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebae.firestore();

export { storage, db };
export default firebase;
