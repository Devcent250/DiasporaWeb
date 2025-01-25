import React from "react";
const image_url = "/real_estate.svg";
const left = "/leftshapes.svg";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function About() {
  return (
    <section className="relative min-h-auto overflow-hidden py-20">
      {/* Background Image */}
      
      <img src={image_url} alt="background" className="background-image mt-[-190px] opacity-30" />


      {/* Decorative Shapes */}
      <div className="relative w-80 h-80 mt-[-130%]">
      <img src={left} alt="background" className="background-image" />
      </div>

      <div className="relative container mx-auto px-6 mt-[-150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#06169F]">
              Who are DIAPORA IWACU?
            </h2>
            <p className="text-gray-900 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center  rounded-full text-[#8297FC]">
                 <RemoveRedEyeIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#6699FF]">
                    Our Mission
                  </h3>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* Vision */}
              <div className="flex items-start space-x-4">
                <div className=" w-12 h-12 flex items-center justify-center  rounded-full text-[#8297FC]">
                <RemoveRedEyeIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#6699FF]">
                    Our Vision
                  </h3>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <img
              src="src/img/aboutimg.png"
              alt="About Us"
              className="w-2/4 mx-auto rounded-lg object-cover mt-24 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
