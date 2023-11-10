import React, { useState, useEffect } from "react";
import CourseList from "./components/CourseList";

import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/ProgressComponents/Header";
import Progress from "./Components/ProgressComponents/progress";
import "./Form.css";
// import "./Components/ProgressComponents/progress.css";
import Search from "./components/Search";

function App() {
  const [course, setCourse] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/courses?q=" + query)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [query]);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <h1>E-Learning platform</h1>
      <Search handleSearch={handleSearch} />
      <Header />
      <CourseList course={course} />
      <Progress />
      <Form />
    </>
  );
}

export default App;
