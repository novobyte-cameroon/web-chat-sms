
const initialState = {
    infoContact: false
}

function userAccount(state = initialState, action) {
    let nextState
    switch (action.type){
        case 'OPEN_USER':
            nextState = {
                ...state,
                infoContact: true
            }
            return nextState || state;

        case 'OPEN_CLOSE_USER':
            nextState = {
                ...state,
                infoContact: !state.infoContact
            }
            return nextState || state;

            default:
            return state
    }
}

export default userAccount;