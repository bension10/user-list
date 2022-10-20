import { configureStore } from '@reduxjs/toolkit'
import usersReducer from 'src/reducers/users'

export default configureStore({
  reducer: {
    users: usersReducer,
  },
})