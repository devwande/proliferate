import proliferate from "../assets/proliferate.svg";
import studentImage from "../assets/images/studentImage.png";
import vectorImage from "../assets/images/Vector.png";
import fbLogo from "../assets/fbLogo.svg";
import googleLogo from "../assets/googleLogo.svg";
import linkedinLogo from "../assets/linkedinLogo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform login/authentication logic
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      {/* Mobile logo */}
      <div className="block md:hidden">
        <img
          src={proliferate}
          alt="Proliferate-logo"
          className="pt-8 pl-10 w-7/12"
        />
      </div>
      <div className="flex h-screen">
        {/* Left side content */}
        <div className="w-1/2 hidden bg-blue md:block">
          <div className="relative">
            <img
              src={proliferate}
              alt="Proliferate-logo"
              className="pt-8 pl-4 md:absolute md:pt-20 md:pl-20 w-auto h-auto"
            />
          </div>
          <div className="flex justify-center items-end h-full">
            <img src={studentImage} alt="Student photo" />
          </div>
        </div>

        {/* Right side content */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center">
          {/* Mobile Header */}
          <div className="w-full mt-[-400px] bg-darkblue py-4 md:hidden flex justify-center items-center">
            <h1 className="font-bold font-montserrat text-white text-lg">
              LOGIN YOUR ACCOUNT
            </h1>
          </div>

          {/* Main Content */}
          <div className="w-full px-4 md:px-0 mt-8 md:mt-0 flex flex-col justify-center items-center">
            <h1 className="hidden md:block font-bold font-montserrat text-lg mb-8">
              LOGIN YOUR ACCOUNT
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full md:w-64 space-y-5"
            >
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="username"
                  className="font-montserrat font-semibold mb-2"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your email address"
                  value={username}
                  onChange={handleUsernameChange}
                  className="bg-white border border-darkgrey rounded-lg px-4 py-4 md:px-4 md:py-2"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="password"
                  className="font-montserrat font-semibold mb-2"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-white border border-darkgrey rounded-lg px-4 py-4 md:px-4 md:py-2"
                />
              </div>
              <div className="flex justify-center pt-8 md:pt-0">
                <button
                  type="submit"
                  className="bg-lightblue text-white font-bold py-2 px-4 rounded-xl md:rounded-full mr-10"
                  onClick={() => {
                    navigate("/registration");
                  }}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="bg-red text-white font-semibold py-2 px-4 rounded-lg flex items-center"
                >
                  Register{" "}
                  <img src={vectorImage} alt="vector-image" className="ml-2" />
                </button>
              </div>
              <a
                href="#"
                className="font-montserrat text-sm text-ash underline flex justify-center"
              >
                Forgot your password?
              </a>
            </form>
            <p className="font-montserrat font-black ">Sign in with</p>
            <div className="flex flex-row py-2 space-x-16">
              <img src={fbLogo} alt="facebook logo" />
              <img src={googleLogo} alt="google logo" />
              <img src={linkedinLogo} alt="linkedin logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLogin;
