import Myimage from "./avatar.jpg";
function Photo()
{
    return (
        <div>
          <img src={Myimage} alt="you are awesome" style={{width:200, height:200}}></img>
        </div>
    );
}
export default Photo;