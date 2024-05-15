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

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can perform login/authentication logic
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen">
      {/* Left side content */}

      <div className="w-1/2 bg-blue">
        <div className="relative">
          <img
            src={proliferate}
            alt="Proliferate-logo"
            className="absolute pt-20 pl-20 w-auto h-auto"
          />
        </div>
        <div className="flex justify-center items-end h-full">
          <img src={studentImage} alt="Student photo" />
        </div>
      </div>

      {/* Right side content */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <h1 className="font-bold font-montserrat text-lg mb-8">
          LOGIN YOUR ACCOUNT
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-64 space-y-5">
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
              className="bg-white border border-darkgrey rounded-lg px-4 py-2"
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
              className="bg-white border border-darkgrey rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-lightblue text-white font-bold py-2 px-4 rounded-full mr-4"
              onClick={() => {
                navigate("/registration")
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
            href=""
            className="font-montserrat text-sm text-ash underline flex justify-center mb-10"
          >
            Forgot your password?
          </a>
        </form>
        <p className="font-montserrat font-black">Sign in with</p>
        <div className="flex flex-row py-2 space-x-10">
          <img src={fbLogo} alt="facebook logo" />
          <img src={googleLogo} alt="google logo" />
          <img src={linkedinLogo} alt="linkedin logo" />
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
