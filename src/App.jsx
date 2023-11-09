import React, { useState, useEffect } from "react";
// import "./App.css";
import CourseList from "./components/CourseList";

function App() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className="ui container">
      <CourseList course={course} />
    </div>
  );
}

export default App;
