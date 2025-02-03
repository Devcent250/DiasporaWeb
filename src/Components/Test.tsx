
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavBar from "./Navbar" 
import { Facebook } from "@mui/icons-material";
const image_url = "/kigali_1.svg";

const Test = () => {
  return (
    <div className="relative h-[540px] overflow-x-hidden">
      <img
        src={image_url || "/placeholder.svg"}
        alt="background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0">
        <div className="flex justify-between items-center px-4 md:px-20 py-4">
          
          
          <NavBar />
        </div>

        <div className="flex flex-col justify-center items-center text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 px-4 text-center">
          <h1 className="text-xl  md:text-4xl font-semibold mt-32">HELPING YOU OWN A HOUSE AT HOME</h1>
          <p className="text-md w-8/6 md:text-base md:w-6/6 lg:w-5/6 lg:text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna turpis, posuere quis enim quis,
            porttitor feugiat diam. Mauris facilisis dolor elit, eget imperdiet diam dapibus egestas.
          </p>
          <button className="px-4 py-1 bg-[#FFB30A] text-white text-md font-semibold cursor-pointer rounded-md lg:py-2">
            Start Now
          </button>
        </div>

        <div className="absolute bottom-20 left-4 md:left-8 hidden md:flex flex-col gap-2">
  <Facebook className="text-white w-6 h-6 cursor-pointer" />
  <XIcon className="text-white w-6 h-6 cursor-pointer" />
  <LinkedInIcon className="text-white w-6 h-6 cursor-pointer mb-12" />
</div>

      </div>

      <div className="absolute bottom-0 right-0 z-50">
        <div className="relative">
          <h1 className="absolute mt-10 text-sm top-1/3 left-1/4 text-white md:text-2xl   font-semibold">
            Investing Home
          </h1>
          <svg
            width="296"
            height="321"
            viewBox="0 0 496 521"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[150px]  h-[350px] lg:w-[296px] lg:h-[500px] md:w-[200px] md:h-[500px] sm:h-[400px]"
          >
            <path
              d="M329.158 520.181C249.791 521.307 145.925 432.279 103.787 387.473C57.5882 334.825 27.4432 289.889 18.1456 274.002C-25.3186 201.384 23.7925 147.792 54.4259 129.602C54.9018 129.319 55.343 129.003 55.7629 128.643C159.751 39.3241 269.167 9.4432 310.949 5.67126C409.788 -14.5109 459.158 33.7947 472.09 61.434C472.416 62.1305 472.793 62.748 473.254 63.363C490.751 86.6744 502.901 155.342 501.81 220.844C500.3 311.559 476.557 359.912 457.557 411.397C422.137 508.118 358.8 524.293 330.753 520.286C330.216 520.209 329.7 520.174 329.158 520.181Z"
              fill="#06169F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Test;
