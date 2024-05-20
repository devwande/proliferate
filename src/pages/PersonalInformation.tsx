import asterisks from "../assets/images/prime_asteriks.png";

import { useNavigate } from "react-router-dom";


const PersonalInformation = () => {
  const navigate = useNavigate();
  
  
  return (
    <>
      <div className="border border-lightgrey rounded-2xl pt-4 pb-10 mt-20 mr-10 ml-10 shadow-lg">
        <h1 className="pb-10 text-center font-normal font-opensans content-center">
          Please provide your full name, email address, contact number, gender
          and age. Ensure that the information is accurate and up-to-date.
        </h1>
        <form className="grid grid-cols-3 gap-12 pb-12 pl-12">
          <div className="">
            <label
              htmlFor="firstname"
              className="font-montserrat font-semibold flex items-center"
            >
              First Name:
              <img src={asterisks} alt="asterisks" />
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2"
            />
          </div>

          <div className="">
            <label
              htmlFor="lastname"
              className="font-montserrat font-semibold flex items-center"
            >
              Last Name:
              <img src={asterisks} alt="asterisks" />
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2"
            />
          </div>

          <div className="">
            <label
              htmlFor="email"
              className="font-montserrat font-semibold flex items-center"
            >
              Email Address:
              <img src={asterisks} alt="asterisks" />
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2"
            />
          </div>

          <div className="">
            <label
              htmlFor="contact"
              className="font-montserrat font-semibold flex items-center"
            >
              Contact Number:
              <img src={asterisks} alt="asterisks" />
            </label>
            <input
              type="number"
              id="lastname"
              placeholder="Last Name"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="font-montserrat font-semibold flex items-center"
            >
              Gender:
            </label>

            <select
              id="gender"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2 w-52"
              //   value={country}
              //   onChange={handleCountryChange}
            >
              <option value=""> </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="n/a">Prefer not to be said</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="age"
              className="font-montserrat font-semibold flex items-center"
            >
              Age:
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              className="bg-white border  border-lightgrey rounded-lg px-4 py-2"
            />
          </div>
        </form>
      </div>

      
    </>
  );
};

export default PersonalInformation;
