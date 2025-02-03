import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import About from "./Components/About";
import Activities from "./Components/Activities";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Test from "./Components/Test"
import Testimonial from "./Components/Testimonials";
import ServicesSection from "./Components/ServicesSection";
import Staff from "./Components/staff";

function App() {

  return (

    <Router>
      <div>
       
      
        <Test /> 
        <About />
         <Activities />
        <ServicesSection /> 
         <Testimonial /> 
        <Staff />
        <Contact />
        <Footer />
      </div>
    </Router>

    

  );



  

}

export default App;