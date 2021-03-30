import { createSlice } from '@reduxjs/toolkit';

export let userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export let { login, logout } = userSlice.actions;

export let selectUser = (state) => state.user.user;

export default userSlice.reducer;
