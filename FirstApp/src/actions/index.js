import firebase from '../firebase';
import {Platform} from 'react-native;'

export const fetchExpenses = () => {
    return function (dispatch) {
        firebase.database().ref('items').on('value', (snapshot) => {
            setTimeout(() => {
                const expenses = snapshot.val() || [];
                dispatch(receiveExpenses(expenses));
            }, 0);
        })
    }
};

export const receiveExpenses = (expenses) => {
    return function (dispatch) {
        Object.values(expenses).forEach(exp => dispatch(addExpense(exp)));
    }
};