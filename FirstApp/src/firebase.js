import * as firebase from 'firebase';
import sessionModel from './models/session';
import itemModel from './models/item';

export const getSessionsDB = () => {
    return database.ref('/').once('value')
};

export const getItemsDB = (sectionId) => {
    return database.ref(`/${sectionId}`).once('value')
};

export const addSession = () => {
    let key = database.ref('/').push().key
    let model = sessionModel(key);
    return database.ref('/'+ key).set(model)
};

export const addItem = (id, name, cost = 0) => {
    return new Promise((resolve, reject) => {
        database.ref(`/${id}`).once('value').then((item) => {
            let items = item.val().items || [];
            let key = database.ref(`/${id}`).push().key;
            items.push(itemModel(key, name, cost));
            database.ref(`/${id}/items`).set(items)
                .then( res => {resolve(res)})
                .catch( error => {reject(error)})
        })
    })
}



// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyAU5dV4WuyFWfHrk5ASa_vZPjGjjB1rkio",
//     authDomain: "firstapp-13b91.firebaseapp.com",
//     databaseURL: "https://firstapp-13b91.firebaseio.com",
//     storageBucket: "firstapp-13b91.appspot.com",
// };
//
// firebase.initializeApp(firebaseConfig);
//
// export default firebase;

