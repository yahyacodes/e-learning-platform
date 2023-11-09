import "./App.css";
import Form from "./Components/Form"; 
import Header from "./Components/ProgressComponents/Header";
import Progress from "./Components/ProgressComponents/progress";
import "./Form.css";
import "./Components/ProgressComponents/progress.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function App() {
<<<<<<< HEAD
  return <></>;
=======
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>E-Learning platform</h1>
      <h1 className="textcolor">
      Hello world!
    </h1>
    <Form/>
     <Header/>
     <Progress/>

    </>
  );
>>>>>>> 379b4c05106ea08c855d78f2a7cf94bb0da52715
}

export default App;
