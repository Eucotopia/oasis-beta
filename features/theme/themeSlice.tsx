import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "@/app/store";

// Define a type for the slice state
interface ThemeState {
    currentTheme: string
}

const initialState = {
    currentTheme: 'light'
} as ThemeState

const themeSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentTheme: (state, action: PayloadAction<string>) => {
            state.currentTheme = action.payload
        },
    },
})
export default themeSlice.reducer
export const {setCurrentTheme} = themeSlice.actions

export const selectCurrentTheme = (state: RootState) => state.theme.currentTheme
