import React, { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./signUp"; 

export default function LogUser() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  //add a new user during sign-up
  const handleSignUp = (user) => {
    setUsers([...users, user]);
  };

  //handle sign-in
  const handleSignIn = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setLoggedInUser(user);
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <p>Welcome, {loggedInUser.username}!</p>
          <button onClick={() => setLoggedInUser(null)}>Sign Out</button>
        </div>
      ) : (
        <div>
          <SignIn onSignIn={handleSignIn} />
          <SignUp onSignUp={handleSignUp} />
        </div>
      )}
    </div>
  );
}