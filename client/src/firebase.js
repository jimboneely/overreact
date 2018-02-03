import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDMllhqAzhDor5AShjJ6oUlOOIz_VjlW1c",
    authDomain: "madlibs-e153f.firebaseapp.com",
    databaseURL: "https://madlibs-e153f.firebaseio.com",
    projectId: "madlibs-e153f",
    storageBucket: "madlibs-e153f.appspot.com",
    messagingSenderId: "319200560349"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;