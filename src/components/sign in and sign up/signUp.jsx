import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../LandingPage/NavBar";

function SignUp({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    onSignUp({ username, password, email });
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <NavBar />
      <div className="ui container" style={{ marginTop: "10em" }}>
        <form className="ui form">
          <h2>Sign Up</h2>

          <div className="field">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/courses">
            <button className="fluid ui button">Sign Up</button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
