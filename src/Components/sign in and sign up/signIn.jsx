import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./signIn.css"
function SignIn({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    onSignIn(username, password);
  };

  return (
    <div>
<<<<<<< HEAD
      <form className="ui form">
        <h2>Sign In</h2>
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
        <button className="fluid ui button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
=======
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>

      <p>
        Don't have an account?
        <Link to="/signUp">Sign up</Link>
      </p>
      
>>>>>>> refs/remotes/origin/sign-in
    </div>
  );
}

export default SignIn;
