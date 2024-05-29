import asterisks from "../assets/images/prime_asteriks.png";

const PersonalInformation = () => {
  return (
    <>
      <div className="md:border mt-[-5px] border-lightgrey rounded-2xl pt-4 pb-10 md:mt-auto md:mr-10 md:ml-10 md:shadow-lg">
        <p className="content-center pb-10 font-normal text-center font-opensans">
          Please provide your full name, email address, contact number, gender
          and age. Ensure that the information is accurate and up-to-date.
        </p>
        <form className="grid gap-12 pl-3 pb-12 md:grid-cols-3 md:pl-10">
          <div className="">
            <label
              htmlFor="firstname"
              className="flex items-center font-normal font-montserrat pb-3"
            >
              First Name:
              <img src={asterisks} alt="asterisks" />
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              className="px-4 py-4 bg-white border rounded-lg border-lightgrey w-[368px] h-[62px] md:px-4 md:py-2"
            />
          </div>

          <div className="">
            <label
              htmlFor="lastname"
              className="flex items-center font-normal font-montserrat pb-3"
            >
              Last Name:
              <img src={asterisks} alt="asterisks" />
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              className="px-4 py-4 bg-white border rounded-lg border-lightgrey w-[368px] h-[62px] md:px-4 md:py-2"
            />
          </div>

          <div className="">
            <label
              htmlFor="email"
              className="flex items-center font-normal font-montserrat pb-3"
            >
              Email Address:
              <img src={asterisks} alt="asterisks" />
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="px-4 py-4 bg-white border rounded-lg border-lightgrey w-[368px] h-[62px] md:px-4 md:py-2"
            />
          </div>

          <div className="">
            <label
              htmlFor="contact"
              className="flex items-center font-normal font-montserrat pb-3"
            >
              Contact Number:
              <img src={asterisks} alt="asterisks" />
            </label>
            <input
              type="number"
              id="lastname"
              placeholder="Last Name"
              className="px-4 py-4 bg-white border rounded-lg border-lightgrey w-[368px] h-[62px] md:px-4 md:py-2"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="flex items-center font-normal font-montserrat pb-3"
            >
              Gender:
            </label>

            <select
              id="gender"
              className="px-4 py-4 bg-white border rounded-lg border-lightgrey w-[368px] h-[62px] md:px-4 md:py-2 md:w-52"
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
              className="flex items-center font-normal font-montserrat pb-3"
            >
              Age:
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              className="px-4 py-4 bg-white border rounded-lg border-lightgrey w-[368px] h-[62px] md:px-4 md:py-2"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInformation;
