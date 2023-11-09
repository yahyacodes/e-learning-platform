import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/ProgressComponents/Header";
import Progress from "./Components/ProgressComponents/progress";
import "./Form.css";
import "./Components/ProgressComponents/progress.css";

function App() {
  return (
    <>
      <h1>E-Learning platform</h1>
      <h1 className="textcolor">Hello world!</h1>
      <Form />
      <Header />
      <Progress />
    </>
  );
}

export default App;
