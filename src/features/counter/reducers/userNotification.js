
const initialState = {
    infoContact: false,
}

function userAccount(state = initialState, action) {
    let nextState;
    if (action.type === 'OPEN_USER') {
        nextState = {
            infoContact: true
        }
        console.log("open "+nextState.infoContact)
    }
    else if (action.type === 'OPEN_CLOSE_USER'){
        nextState = {
            infoContact: !state.infoContact
        }
        console.log("open close "+nextState.infoContact)
    }
    return nextState || state
}

export default userAccount;