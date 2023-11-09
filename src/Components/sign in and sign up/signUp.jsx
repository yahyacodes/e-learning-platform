import React, { useState } from "react";

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
    <div>
      <form className="ui form">
        <h2>Sign Up</h2>
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

        <div className="field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="fluid ui button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
