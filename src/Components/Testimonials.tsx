import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useRef } from "react";

const Testimonial = () => {
  const containerRef = useRef(null);
  const right = "/rightshapes.svg";

  const testimonials = [
    {
      img: "/testimonial2.png",
      name: "Jack",
      text: "The service was fantastic! I am really happy with the experience and would highly recommend it.",
      stars: 5,
    },
    {
      img: "/testimonial3.png",
      name: "Lily",
      text: "An amazing platform! It helped me a lot in organizing my work efficiently.",
      stars: 3,
    },
    {
      img: "/testimonial3.png",
      name: "Mark",
      text: "Great customer support and easy to use. I would definitely use this service again.",
      stars: 4,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center mt-20 py-8 px-4">
     
      <span className="font-moonDance text-4xl">Members</span>
      <span className="relative inline-block px-8 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#ffebbe]">
        <span className="relative text-[#2d2d2d] text-[32px] font-semibold">
          Testimonial
        </span>
      </span>

   
      <img
        src={right}
        alt="background"
        className="absolute w-30 sm:w-50 h-60 -bottom-450  -right-0"
      />

    
      <div className="flex flex-wrap justify-center gap-6 px-6 max-w-6xl mx-auto mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 justify-center items-center p-6 bg-[#FEFAF2] rounded-lg shadow w-full sm:w-[45%] lg:w-[30%]"
          >
            <div className="bg-[#FFEBBE] w-24 h-24 mt-[-40px] rounded-full flex items-center justify-center">
              <img
                src={testimonial.img}
                alt={`Testimonial ${testimonial.name}`}
                className="w-20 h-20 rounded-full"
              />
            </div>
            <p className="text-center">{testimonial.text}</p>
            <div className="flex justify-between items-center w-full px-6">
              <span className="text-sm font-semibold">{testimonial.name}</span>
              <div className="text-[#DA7110] flex">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <StarHalfIcon key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
