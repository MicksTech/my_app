import "./App.css";
import { useEffect } from "react";
import Swal from "sweetalert2";
import officeBg from "./assets/Office-bg.jpg";
import UserImg from "./assets/User-img.jpg";
import FbImg from "./assets/Fb-img.png";
import TwitterImg from "./assets/Twitter-img.jpg";
import IgImg from "./assets/Ig-img.jpg";

function App() {
  useEffect(() => {
    Swal.fire({
      title: "Welcome 👋",
      text: "Please login to continue.",
      icon: "info",
      confirmButtonColor: "#3b82f6",
      confirmButtonText: "Let's go",
    });
  }, []);

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen w-full relative bg-cover bg-center"
        style={{ backgroundImage: `url(${officeBg})`,  backgroundSize: `cover`}}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Card Container */}
        <div className="relative z-10 w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white rounded-tr-md rounded-br-md shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left Side Image */}
          <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center">
            <img
              src={UserImg}
              alt="User"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Side Form */}
          <form className="p-8 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-center uppercase text-2xl md:text-3xl text-stone-800 font-bold mb-6">
              Login
            </h2>

            {/* Username */}
            <label className="font-medium" htmlFor="username">
              Username
            </label>
            <input
              className="border border-stone-400 w-full h-10 px-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="username"
              id="username"
              required
            />

            {/* Password */}
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="border border-stone-400 w-full h-10 px-2 mb-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              id="password"
              required
            />

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-grow h-px bg-stone-400"></span>
              <p className="text-stone-500">or</p>
              <span className="flex-grow h-px bg-stone-400"></span>
            </div>

            {/* Login Button */}
            <button className="w-full h-10 bg-blue-600 text-white rounded-md uppercase font-semibold hover:bg-blue-700 transition-colors">
              Login
            </button>

            {/* Social Media Login */}
            <div className="flex w-full justify-center items-center gap-4 my-6">
              <img className="w-10 h-10 cursor-pointer" src={FbImg} alt="Facebook" />
              <img className="w-8 h-8 cursor-pointer" src={TwitterImg} alt="Twitter" />
              <img className="w-10 h-10 cursor-pointer" src={IgImg} alt="Instagram" />
            </div>

            {/* Sign Up */}
            <div className="w-full flex justify-center gap-2 text-sm md:text-base">
              <p>Don't have an account?</p>
              <a
                className="cursor-pointer text-blue-700 underline hover:text-blue-900"
                href="#"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
