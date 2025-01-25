import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import About from "./Components/About";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Test from "./Components/Test"
import Testimonial from "./Components/Testimonial";

function App() {

  return (
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
  );



  

}

export default App;