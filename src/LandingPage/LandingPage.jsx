import React from "react";
import NavBar from "./NavBar";
import Hero from "../Components/Hero";
import TopCourses from "../Components/TopCourses";
import Testimonials from "../Components/Testimonials";
import Join from "../Components/Join";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <TopCourses />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default LandingPage;
