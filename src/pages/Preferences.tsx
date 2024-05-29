const Preferences = () => {
  return (
    <>
      <div className="lg:border mt-[-5px] border-lightgrey rounded-2xl pt-4 pb-10 lg:mt-auto lg:mr-10 lg:ml-10 lg:shadow-lg">
        <p className="content-center pb-10 font-normal text-center font-opensans pr-3 pl-3">
          Choose whether you prefer online or in-person tutoring and specify
          your availability for sessions. You can also mention any additional
          preferences or requirements you have for the tutoring sessions.
        </p>
        <form className="grid grid-rows-3 grid-flow-col gap-12 pl-7 pb-12 lg:pl-12">
          <div>
            <label
              htmlFor="availability"
              className="font-montserrat font-normal flex items-center pb-3" 
            >
              Availability:
            </label>

            <select
              id="availability"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2 w-[365px] h-[92px]"
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
              className="font-montserrat font-normal flex items-center pb-3"
            >
              Additional Preferences/Requirements:
            </label>
            <input
              type="text"
              id="location"
              placeholder="Specify any additional preferences or requirements"
              className="bg-white border border-lightgrey rounded-lg px-2 w-[365px] h-[92px] font-opensans font-normal text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="communication"
              className="font-montserrat font-normal flex items-center pb-3"
            >
              Communication Language:
            </label>
            <input
              type="text"
              id="communication"
              placeholder="Enter your preferred language"
              className="bg-white border border-lightgrey rounded-lg px-2 w-[368px] h-[62px] font-opensans font-normal text-sm"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Preferences;
