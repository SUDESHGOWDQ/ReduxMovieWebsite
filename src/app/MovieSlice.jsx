
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        trending: [],
        comedy: [],
        original:[],
        topRated:[],
        Action:[],
        Horror:[],
        Romance:[]
    },
    reducers: {
        setMovies: (state, action) => {
            const { category, movies } = action.payload;
            state[category] = movies;
        }
    }
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
