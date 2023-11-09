// import React from 'react'
// import Navbar from '../Components/navBar'

// function LandingPage() {
//   return (
//     <div>
//         <Navbar/>
//     </div>
//   )
// }

// export default LandingPage

// LandingPage.jsx

import React from "react";
import NavBar from "./NavBar";
import Hero from "../Components/hero";

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
    </div>
  );
};

export default LandingPage;
