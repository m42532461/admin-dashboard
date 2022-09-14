import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // redux -> send request
    login(dispatch, { username, password });
  };

  return (
    <div className="flex items-center justify-center h-[100vh] flex-[4] flex-col">
      <input
        className="p-[10px] mb-5"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="p-[10px] mb-5"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="p-[10px] w-[100px]" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
