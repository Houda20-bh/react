import React,{Component} from "react";
import  "./App.css";

class Profile extends Component{
  constructor(){
    super();
    this.state={
    Bio: "Dreamer of Life - Head of the Creative  ",
    Profession:"Teacher",
    };
    
  }
    render() {
        let bio=this.state.Bio;
        let prof=this.state.Profession;
    
      return (
        <>
        

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEtt5uEaGKTOy0xhfUZuDJhHUVs44kAqWCtGwtJ_t5jy98q6YIKk1pKQqNPBrvoMG0zg&usqp=CAU" alt="I am here"/>
          <h3> {bio}</h3>
          <h3> {prof}</h3>
        </>
      );
    }
  }
export default Profile;
