import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPy7kloiA8apFwVjlDBaCAZPmchtD0MfA',
  authDomain: 'udemy-vue-firebase-sites-edfc8.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-edfc8',
  storageBucket: 'udemy-vue-firebase-sites-edfc8.appspot.com',
  messagingSenderId: '628459285854',
  appId: '1:628459285854:web:050b96010711fc3002f3cf',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

// export firestore
export { projectFirestore };
