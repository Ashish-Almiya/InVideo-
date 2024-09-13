import { createSlice } from "@reduxjs/toolkit";



const appslice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen:true
    },
    reducers: {
        toggglemenu: (state) => {
          state.isMenuOpen = !state.isMenuOpen;
        },
        closemenu: (state) => {
            state.isMenuOpen = false
        }
    }
})
export const { toggglemenu ,closemenu } = appslice.actions;
export default appslice.reducer;


