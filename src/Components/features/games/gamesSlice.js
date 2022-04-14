import { createSlice } from "@reduxjs/toolkit"

export const games = createSlice({
    name: 'games',
    initialState: {isWindowHidden: false, gameInformations: [], genres: [], pageNum: 1},
    reducers: {
        getGenres: (state, action) => {
            state.genres = action.payload
        },
        setPageNum: (state, action) => {
            state.pageNum = action.payload
        },
        changeWindowState: (state, action) => {
            state.isWindowHidden = action.payload
        },
        changeGameInformations: (state, action) => {
            state.gameInformations = action.payload
        }
    },
})

export const {changeWindowState, changeGameInformations, getGenres, setPageNum} = games.actions

export default games.reducer