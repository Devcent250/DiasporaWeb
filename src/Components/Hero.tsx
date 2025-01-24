
import React from "react";

function HeroSection() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Diaspora Iwacu</h1>
        <p className="text-lg mb-8">
          Connecting communities and empowering individuals through innovative solutions.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
