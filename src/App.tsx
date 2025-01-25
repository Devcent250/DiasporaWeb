import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import About from "./Components/About";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Test from "./Components/Test"
import Testimonial from "./Components/Testimonial";

function App() {

  return (
<<<<<<< HEAD
    <Router>
      <div>
       
        {/* Landing Page */}
        <Test />
        <About />
        <Features />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </Router>
=======
    <Test/>
    // <Router>
    //   <div>
    //     <NavBar />
    //     {/* Landing Page */}
    //     <HeroSection />
    //     <About />
    //     <Features />
    //     <Contact />
    //     <Footer />
    //   </div>
    // </Router>
>>>>>>> a5c39c7e33b48031f2d98da8e11356a2ad3f1e97
  );



  

}

export default App;