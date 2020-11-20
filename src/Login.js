import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import "./StateProvider";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {
  const [{}, dispatch] = useStateValue();
  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div className="login__text">
          <h2>Sign in to Whatsapp</h2>
        </div>
        <Button onClick={handleSignIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
