import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import CourseList from "./components/CourseComponents/CourseList";
import Form from "./components/FormComponents/Form";
import LandingPage from "./components/LandingPage/LandingPage";
import SignIn from "./components/sign in and sign up/signIn";
import SignUp from "./components/sign in and sign up/signUp";

function App() {
  const [course, setCourse] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/courses?q=" + query)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-page" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/courses" element={<CourseList course={course} />} />
        <Route path="/contact-us" element={<Form />} />
      </Routes>
    </>
  );
}
export default App;
