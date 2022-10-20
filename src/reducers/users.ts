
import { createSlice } from '@reduxjs/toolkit';


export const usersSlice = createSlice({
  name: 'users',
  initialState: [
    {
      id: 1,
      name: '',
      username: '',
      email: '',
      address: {},
      phone: '',
      website: '',
      company: {},
    }
  ],
  reducers: {
    fetchPending: (state) => {
      state = []
    },
    fetchSuccess: (state, action) => {
      return action.payload
    },
    fetchFail: (state) => {
      state = []
    },
  },
})

export const { fetchPending, fetchSuccess, fetchFail } = usersSlice.actions;

export default usersSlice.reducer;