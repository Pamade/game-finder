import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../Components/features/search/searchSlice';
import gamesSliceReducer from '../Components/features/games/gamesSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    games: gamesSliceReducer,
  },
});


