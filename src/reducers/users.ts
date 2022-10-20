
import { createSlice } from '@reduxjs/toolkit';


export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    fetchPending: (state) => {
      state.users = []
    },
    fetchSuccess: (state, action) => {
      state.users = action.payload
    },
    fetchFail: (state) => {
      state.users = []
    },
  },
})

export const { fetchPending, fetchSuccess, fetchFail } = usersSlice.actions;

export default usersSlice.reducer;