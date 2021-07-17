
const initialState = {
    messageSend: [],
}

function messageNotification(state = initialState, action) {
    let nextState;
    if (action.type === 'MESSAGE_ENVOYE'){
        nextState = {
            ...state,
            messageSend: action.value
        }
    }
    return nextState || state
}

export default messageNotification;