
import './App.css';
import PropTypes from "prop-types";
import Photo from './Profile/Photo';
import Profile from './Profile/Pro';
import Pro from './Profile/Pro';


function App() {
  const styleMe={color:'darkblue',fontStyle: 'italic', textAlign: 'center'};
  const infos=
  {
   fullname:"Ben Hattab Houda",
   Bio:"Learning  React",
   Profession:"Teacher",
  };
  const handlename =()=>{
    alert(infos.fullname);
  };
  return (
    <div className="App" style={styleMe}>
    <Profile fullname={infos.fullname}
    bio={infos.Bio}
    profession={infos.Profession} 
    fun={handlename}>
    
    <p>“Once you replace negative thoughts with positive ones,
     you will start having positive results.” — Willie Nelson</p>
    </Profile>
    <Photo></Photo>

    </div>
  );
}

export default App;
Pro.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  fun: PropTypes.func
 };
