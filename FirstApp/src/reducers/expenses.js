const expense = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                id: action.id,
                name: action.text,
                value: action.value,
            };
        case 'SEND_EXPENSE':
            let expense = {
                name: action.text,
                value: action.value
            };
            const newExpRef = firebase.database().ref('items').push();
            expense.id = newExpRef.key;
            newExpRef.set(expense);

            return expense;
        default:
            return state;
    }
};

const expenses = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            if (state.map(m => m.id).includes(action.id)) {
                return state;
            }
            else {
                return [...state, message(undefined, action)]
            }
        case 'SEND_EXPENSE':
            return [...state, message(undefined, action)]
        default:
            return state;
    }
}