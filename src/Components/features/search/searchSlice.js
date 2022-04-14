import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {search: 'witcher 3'},
    reducers: {
        searchByTitle: (state, action) => {
            state.search = action.payload
        },
    },
})

export const {searchByTitle} = searchSlice.actions

export default searchSlice.reducer