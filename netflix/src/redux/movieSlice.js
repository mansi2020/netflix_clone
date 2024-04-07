import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowplayingMovies :null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies: null,
        toggle:false,
    },
    reducers:{
        //actions
        setNowPlayingMovies: (state,action)=>{
            state.nowplayingMovies = action.payload;
        },
        setPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        setTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        setTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        setUpcomingMovies : (state,action)=>{
            state.upcomingMovies = action.payload;
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle;
        }
    }
});

export const {setNowPlayingMovies,setPopularMovies,setTopRatedMovies,setUpcomingMovies,setToggle} =movieSlice.actions;

export default movieSlice.reducer;