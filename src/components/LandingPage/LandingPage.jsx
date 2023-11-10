import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import TopCourses from "./TopCourses";
import Testimonials from "./Testimonials";
import Join from "./Join";
import Footer from "./Footer";

const LandingPage = ({ showLogin, setShowLogin }) => {
  return (
    <div>
      <NavBar showLogin={showLogin} setShowLogin={setShowLogin} />
      <Hero />
      <TopCourses />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default LandingPage;
