import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root"))?.user
    )?.currentUser;

    if (user) {
      navigate("/");
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // redux -> send request
    login(dispatch, { username, password });
    navigate("/");
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
