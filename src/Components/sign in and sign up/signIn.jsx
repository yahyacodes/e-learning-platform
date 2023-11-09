import React, { useState } from "react";

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    onSignIn(username, password);
  };

  return (
    <div>
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
    </div>
  );
}

export default SignIn;
