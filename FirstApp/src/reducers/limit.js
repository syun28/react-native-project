const limit = (state, action) => {
    switch (action.type) {
        case 'ADD_LIMIT':
            return {
                id: action.id,
                limit: action.value,
            };
        case 'SEND_LIMIT':
            let limit = {
                limit: action.value
            };
            const newLimRef = firebase.database().ref('limit').push();
            limit.id = newLimRef.key;
            newLimRef.set(limit);

            return limit;
        default:
            return state;
    }
};

export default limit;