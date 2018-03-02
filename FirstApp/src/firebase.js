import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAU5dV4WuyFWfHrk5ASa_vZPjGjjB1rkio",
    authDomain: "firstapp-13b91.firebaseapp.com",
    databaseURL: "https://firstapp-13b91.firebaseio.com",
    storageBucket: "firstapp-13b91.appspot.com",
};
firebase.initializeApp(firebaseConfig);

export default firebase;

