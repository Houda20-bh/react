import{createSlice} from'@reduxjs/toolkit';

const authSlice =createSlice({
    name:"auth",
    initialState:{
      isLogedin:false, 
    },
    reducers:{
    login(state){state.isLogedin=true},
    logout(state){state.isLogedin=false},
    },
});
export const{login,logout}=authSlice.actions;
export default authSlice.reducer;
