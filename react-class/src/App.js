import React,{Component} from "react";
import  "./App.css";
import Profile from "./Profile";
class App extends Component{
  constructor(){
    super();
    this.state = {
      fullName : "Houda Ben Hattab",
      show:false,
      timer:0,
      intervall:0,
     }; 
  }
  showProfile = ()=>{this.setState({
    show:!this.state.show,
  });};
 
   
    componentDidMount(){
      this.setState({
          intervall: setInterval(
              ()=>this.setState({timer:this.state.timer+1}),
              1000
          ),
      });
    }
  
    render() {
      let name=this.state.fullName;
      return (
        <div>
          <h1>{name}</h1>
          <br></br>
          {this.state.timer >=20 && this.state.show && <Profile></Profile>}
          <button onClick={this.showProfile}> 
          {this.state.show? "Hide me" : "Show me"}</button>
        <h4> Chronometer {this.state.timer}</h4>
        
     
          
        </div>
      );
    }
  }
export default App;

