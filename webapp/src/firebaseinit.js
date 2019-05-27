import * as firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAO5gwHMpQyV7RbZi91jgJ12IEWPvdOAf4",
    authDomain: "gmo-receipt-app.firebaseapp.com",
    databaseURL: "https://gmo-receipt-app.firebaseio.com",
    projectId: "gmo-receipt-app",
    storageBucket: "gmo-receipt-app.appspot.com",
    messagingSenderId: "870231948192",
    appId: "1:870231948192:web:6f6c3783c2fd6fda"
};
firebase.initializeApp(firebaseConfig);
console.log('init again');

export default firebase;