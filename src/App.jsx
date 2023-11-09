import React, { useState, useEffect } from "react";
import Form from "./components/FormComponents/Form";
import Progress from "./components/ProgressComponents/Progress";
import CourseList from "./components/CourseList";

import "./App.css";
import Form from "./Components/Form";
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
    <div className="ui container">
      <Form />
      <Progress />
        <CourseList course={course} />
      </div>
    </>
  );
}

export default App;
