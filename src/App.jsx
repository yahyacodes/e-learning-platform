// import { useState } from "react";
// import "./App.css";
// import Navbar from "./Components/navBar";
// import "./index.css";
// import Login from "./Pages/login";
// import Contacts from "./Pages/contacts";
// import About from "./Pages/about";
// import Services from "./Pages/services";
// import Signup from "./Pages/signup";


// function App() {
  

//   return (
//     <>
//     <Router>
//       <>
//         <Routes>
//           <Route path="/" element={<Landingpage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </>
//     </Router>
//     </>
//   );
// }

// export default App;

// App.jsx
import { useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";


function App() {
  return (
    <>
      
          <LandingPage />
          
    </>
  );
}

export default App;

