import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const movieSlice = createSlice({
    name : "movie",
    initialState :{movies  : [{
        id:uuidv4(),
        title:"Death at a Funeral",
        discription:"is a hilarious day in the life of an American family come together to put a beloved husband and father to rest.",
        posterurl:"https://m.media-amazon.com/images/I/515bg3a0CJL.jpg",
        rating:9,
        isUpdated : false,
    },
    {
        id:uuidv4(),
        title:"Due date",
        discription:"Robert Downey Jr. plays Peter Highman, an expectant first-time father whose wife's due date is only days away.",
        posterurl:"https://m.media-amazon.com/images/M/MV5BMTU5MTgxODM3Nl5BMl5BanBnXkFtZTcwMjMxNDEwNA@@._V1_.jpg",
        rating:5,
        isUpdated : false,
    },
    ]},
    reducers : {
     addMovie : (state,action)=> {
    state.movies.push(action.payload)
     },
     deleteMovie : (state,action)=>{
    state.movies = state.movies.filter((el)=> el.id !== action.payload)
     },

     upDateMovie : (state,action)=>{
       state.movies = state.movies.map((el)=>el.id === action.payload.id ? el = action.payload.upDatedMovie : el)
     }
    }
}) 

export const {addMovie,deleteMovie,upDateMovie} = movieSlice.actions;
export default movieSlice.reducer;