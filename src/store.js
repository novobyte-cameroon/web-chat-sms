import { configureStore } from '@reduxjs/toolkit'
import userNotification from './features/counter/reducers/userNotification'

export default configureStore({
    reducer: {
        notification: userNotification
    },
})