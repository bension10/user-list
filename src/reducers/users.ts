
import { createSlice } from '@reduxjs/toolkit';


export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {
        id: 1,
        name: '',
        username: '',
        email: '',
        address: {},
        phone: '',
        website: '',
        company: {},}
    ],
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