import React from "react";

function About() {
  return (
    <section className="relative min-h-auto overflow-hidden mb-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/src/img/heroimg.jpg')`,
        }}
      />

      {/* Top Vectors */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Vector 1 */}
        <div
          className="absolute top-6 left-8 w-48 h-12 bg-[#FFEBBE] rounded-sm rotate-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
          }}
        ></div>
        {/* Vector 2 */}
        <div
          className="absolute top-2 left-6 w-48 h-12 bg-[#06169F] rounded-sm rotate-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-[#06169F]">
              Who are DIAPORA IWACU?
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#6699FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#6699FF]">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#6699FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#6699FF]">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src="/src/img/aboutimg.png"
              alt="About Us"
              className="absolute right-0 top-12 transform -translate-y-1/2 w-1/2 h-auto rounded-lg object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
