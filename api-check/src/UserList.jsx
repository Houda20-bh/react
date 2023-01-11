import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  console.log(users);

  return (
    <div>
        <p><i>Positive vibes bring happiness to your heart.</i></p>
        <br></br>
      <h1> Users List  </h1>
      {users.map((el) => {
          return(<i><p key={el.id}><h5> {el.name} </h5> <h5> {el.username} </h5><h6> {el.email} </h6> </p></i>);
        })}
    </div>
  );
};

export default UserList;
