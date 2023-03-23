import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email);
    console.log(password);
  };
  
  return(
    <div>
    <h1>Login!</h1>

    <form onSubmit={handleSubmit}>
      <h5>Email:</h5>
      <input placeholder="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
      <h5>Password:</h5>
      <input placeholder="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
      <button>Login</button>
    </form>
    </div>
  )
}

export default Login