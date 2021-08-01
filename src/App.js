import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1);

  const getdata = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=${count}`);
    const json = await response.json();
    setUsers(json.data);
    console.log(json.data)
  };
  useEffect(() => {
    getdata();
  }, [count]);

  

  return (
    <div className="App">
      <h1 className="txt">User List of Page {count}</h1>
      <div className="btn">
      <button onClick={() => setCount(1)}>1</button>
      <button onClick={() => setCount(2)}>2</button></div>
      <div >
        {users.length &&
          users.map((user) => {
            return (
              <div style={{marginTop:"50px"}} key={user.id} className="container">
                <p>
                  <strong className="txt">Name:- {user.first_name} {user.last_name}</strong>
                </p>
                <p className="txt"><strong>Email:- </strong>{user.email}</p>
                <img key={user.avatar} src={user.avatar} alt="" />

              </div>
              
            );
          })}
      </div>
    </div>
  );
}
