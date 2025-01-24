import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        {/* Landing Page */}
        <HeroSection />
        <About />
        <Features />
        <Contact />
        <Footer />
      </div>
    </Router>
  );



  

}

export default App;
