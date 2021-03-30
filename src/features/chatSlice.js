import { createSlice } from '@reduxjs/toolkit';

export let chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatId: null,
    chatName: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
  },
});

export let { setChat} = chatSlice.actions;

export let selectChatName = (state) => state.chat.chatName;
export let selectChatId = (state) => state.chat.chatId;

export default chatSlice.reducer;
