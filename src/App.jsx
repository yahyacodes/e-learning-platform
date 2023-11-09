import React from "react";
import SaveSignIn from "./Components/SignInSignUp/SaveSignIn";
import "./App.css";
import SignIn from "./Components/SignInSignUp/SignIn";
import SignUp from "./Components/SignInSignUp/SignUp";
import Like from "./Components/Like";

function App() {
  return (
    <>
      <SaveSignIn />
      <SignIn />
      <SignUp />
      <Like />
    </>
  );
}

export default App;
