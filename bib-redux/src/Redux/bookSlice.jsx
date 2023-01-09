import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const bookSlice=createSlice ({
   
    name:"book",
    initialState:{ books:[
        {
        id:uuidv4(),
        title:"The 7 Habits Of Highly Effective People ",
         discription:'teaches you both personal and professional effectiveness by changing your view of how the world works and giving you 7 habits, which, if adopted well, will lead you to immense success.',
         author:'Stephen Covey',
         urlImg:'https://fourminutebooks.com/wp-content/uploads/2016/01/the-7-habits-of-highly-effective-people-summary.png',
         rating:5,
        },
        {
            id:uuidv4(),
            title:"Rich Dad Poor Dad ",
             discription:' What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
             author:'Robert Kiyosaki',
             urlImg:'https://i.ytimg.com/vi/wp7Lz1svVro/maxresdefault.jpg',
             rating:8,
            },
        ]},
        reducers : {
          addToBib: (state,action) =>{
            state.books.push(action.payload);
          } ,
         deleteToBib:(state,action)=>
         {
            state.books = state.books.filter((el)=> el.id !== action.payload)
     },
     upDateBook:(state,action)=>{
      state.books = state.books.map((el)=>el.id=== action.payload? 
      el=action.payload.upDatedBook: el)
     },
         },
      
  
})
export const{addToBib,deleteToBib,upDateBook}=bookSlice.actions;
export default bookSlice.reducer;
