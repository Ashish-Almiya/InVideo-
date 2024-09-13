import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatslice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addmessage: (state, action) => {
            state.messages.unshift(action.payload)
            state.messages.push(LIVE_CHAT_COUNT,1)
        }
    }
})
export const { addmessage } = chatslice.actions;
export default chatslice.reducer