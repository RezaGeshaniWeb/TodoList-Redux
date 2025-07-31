import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeValue: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDark: (state) => {
            state.themeValue = state.themeValue === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', state.themeValue)
        }
    }
})

export default themeSlice.reducer
export const { setDark } = themeSlice.actions