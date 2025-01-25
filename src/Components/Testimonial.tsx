import React from "react";

const testimonials = [
  {
    name: "JOHN SMITH",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    rating: 1,
  },
  {
    name: "ARIANA JOSEE",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    rating: 2,
  },
  {
    name: "JULIA",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    rating: 0,
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Members'</h2>
        <h3 className="text-2xl font-bold text-blue-600 bg-amber-100 py-2 px-4 inline-block ">
  TESTIMONIALS
</h3>
 </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-yellow-100 p-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <blockquote className="text-center italic text-gray-600 mb-4">
              <span className="text-2xl text-orange-400 font-bold">“</span>
              {testimonial.text}
              <span className="text-2xl text-orange-400 font-bold">”</span>
            </blockquote>
            <p className="text-center text-gray-700 font-bold">
              {testimonial.name}
            </p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={starIndex < testimonial.rating ? "#FFA500" : "none"}
                  viewBox="0 0 24 24"
                  stroke="#FFA500"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.05 6.319a1 1 0 00.95.69h6.682c.969 0 1.371 1.24.588 1.81l-5.41 3.918a1 1 0 00-.364 1.118l2.05 6.319c.3.921-.755 1.688-1.54 1.118l-5.41-3.918a1 1 0 00-1.176 0l-5.41 3.918c-.784.57-1.84-.197-1.54-1.118l2.05-6.319a1 1 0 00-.364-1.118l-5.41-3.918c-.783-.57-.381-1.81.588-1.81h6.682a1 1 0 00.95-.69l2.05-6.319z"
                  />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
