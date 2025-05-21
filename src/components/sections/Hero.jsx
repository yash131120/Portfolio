import { useState, useEffect } from "react";
import user_info from "../../data/user_info.js";

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["Reader", "Programmer", "Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div id="hero" className="px-4 sm:px-6 lg:px-24 py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-xl sm:text-2xl text-orange-500 font-bold animate-fadeIn">
              {Array.from(user_info.main.name).map((char, index) => (
                <span key={index} className="mr-1 hover:text-orange-600 transition-colors">
                  {char}
                </span>
              ))}
            </h2>

            <h1 className="font-black mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900 dark:text-zinc-100 animate-slideIn">
              {Array.from(user_info.main.role).map((char, index) => (
                <span key={index} className="mr-1 hover:text-orange-500 transition-colors">
                  {char}
                </span>
              ))}
            </h1>

            <p className="font-black mt-3 text-2xl sm:text-3xl md:text-4xl animate-fadeIn">
              <span className="text-orange-500">+ </span>
              {roles[currentRoleIndex]}
            </p>

            <p className="mt-6 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl">
              {user_info.main.description}
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/3">
            <div className="relative w-full aspect-square max-w-[400px] mx-auto rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-xl">
              <img
                src={user_info.main.photo}
                alt="Profile"
                className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-0"
              />
              <img
                src={user_info.main.hoverphoto}
                alt="Profile Hover"
                className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-8 mb-4">
        <div className="w-5 h-10 border-2 border-orange-500 rounded-full flex justify-center items-start p-1">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-updown" />
        </div>
      </div>
    </section>
  );
}

export default Hero;