import { useState } from "react";
import "./App.css";
import Form from "./Components/Form"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>E-Learning platform</h1>
      <h1 className="textcolor">
      Hello world!
    </h1>
    <Form/>
    </>
  );
}

export default App;
