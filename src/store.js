import { configureStore } from '@reduxjs/toolkit'
import userNotification from './features/counter/reducers/userNotification'
import messageNotification from "./features/counter/reducers/messageNotification";

export default configureStore({
    reducer: {
        messageGet: messageNotification,
        notification: userNotification,
    },
})