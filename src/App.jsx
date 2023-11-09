import React, { useState, useEffect } from "react";
import CourseList from "./components/CourseList";

import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/ProgressComponents/Header";
import Progress from "./Components/ProgressComponents/progress";
import "./Form.css";
import "./Components/ProgressComponents/progress.css";

function App() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <>
      <h1>E-Learning platform</h1>
      <h1 className="textcolor">Hello world!</h1>
      <Form />
      <Header />
      <Progress />

      <div className="ui container">
        <CourseList course={course} />
      </div>
    </>
  );
}

export default App;
