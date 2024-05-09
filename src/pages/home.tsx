import proliferate from "../assets/proliferate.svg";
import studentImage from "../assets/images/studentImage.png";
import vectorImage from "../assets/images/Vector.png"
import { useState } from "react";

const Home = () => {
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
        <form onSubmit={handleSubmit} className="flex flex-col w-64">
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
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
              className="bg-lightgrey border border-darkgrey rounded-lg px-4 py-2"
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
              className="bg-lightgrey border border-darkgrey rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Login
            </button>
            <button
              type="button"
              className="bg-red text-white font-semibold py-2 px-4 rounded"
            >
              Register <img src={vectorImage} alt="vector-image" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
