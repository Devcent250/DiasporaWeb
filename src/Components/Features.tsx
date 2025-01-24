
import React from "react";

function Features() {
  return (
    <section className="py-20 bg-blue-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Feature 1</h3>
            <p>Engage with like-minded people and share your ideas.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Feature 2</h3>
            <p>Organize impactful events and projects in your community.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Feature 3</h3>
            <p>Access resources and tools for personal and professional growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
