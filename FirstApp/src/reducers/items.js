const initialState = {
    items: []
}

export default function itemReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        default:
            return state
    }
}