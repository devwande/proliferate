const Preferences = () => {
  return (
    <>
      <div className="flex flex-col border border-lightgrey rounded-2xl pt-4 mr-10 ml-10 shadow-lg">
        <p className="pb-10 self-center text-center flex font-normal font-opensans content-center w-2/3">
          Choose whether you prefer online or in-person tutoring and specify
          your availability for sessions. You can also mention any additional
          preferences or requirements you have for the tutoring sessions.
        </p>
        <form className="grid grid-rows-3 grid-flow-col gap-12 pb-12 pl-12">
          <div>
            <label
              htmlFor="availability"
              className="font-montserrat font-semibold flex items-center"
            >
              Availability:
            </label>

            <select
              id="availability"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2 w-52"
            >
              <option value=""> </option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Mornings">Mornings</option>
              <option value="Afternoons">Afternoons</option>
              <option value="Evenings">Evenings</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="location"
              className="font-montserrat font-semibold flex items-center"
            >
              Additional Preferences/Requirements:
            </label>
            <input
              type="text"
              id="location"
              placeholder="Specify any additional preferences or requirements"
              className="bg-white border  border-lightgrey rounded-lg px-4 py-2 w-1/3 h-16"
            />
          </div>

          <div>
            <label
              htmlFor="communication"
              className="font-montserrat font-semibold flex items-center"
            >
              Communication Language:
            </label>
            <input
              type="text"
              id="communication"
              placeholder="Enter your preferred language"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2 w-64"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Preferences;
