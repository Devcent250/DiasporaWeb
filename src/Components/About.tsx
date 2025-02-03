import React from "react";
const image_url = "/real_estate.svg";
const left = "/leftshapes.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function About() {
  return (
    <section className="relative min-h-auto overflow-hidden py-10 lg:mt-[-250px] mt-[-235px]   ">
    
      <img
        src={image_url}
        alt="background"
        className="absolute top-0 left-0 w-full h-auto opacity-60"
      />
     <div className="absolute left-[-70px] top-50 md:left-0 md:w-80 md:h-80">
  <img src={left} alt="shapes" className="w-full h-full object-contain" />
</div>


      
      <div className="relative container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#06169F] mt-28">
              Who are DIASPORA IWACU?
            </h2>
            <p className="text-black font-semibold text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-black font-semibold text-base sm:text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

       
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center ">
                  <TipsAndUpdatesIcon className="text-[#06169F]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#06169F]">
                    Our Mission
                  </h3>
                  <p className="text-black text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <RemoveRedEyeIcon className="text-[#06169F]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#06169F]">
                    Our Vision
                  </h3>
                  <p className="text-black text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="src/img/aboutimg.png"
              alt="About Us"
              className="w-full sm:w-2/3 lg:w-3/4 mx-auto rounded-lg object-cover lg:mt-80 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
