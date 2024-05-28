const AcademicDetails = () => {
  return (
    <>
      <div className="md:border mt-[-5px] border-lightgrey rounded-2xl pt-4 pb-10 md:mt-auto md:mr-10 md:ml-10 md:shadow-lg">
        <p className="content-center pb-10 font-normal text-center font-opensans pr-3 pl-3">
          Please enter the name of your school, college, or university, along
          with your grade or year of study. Select the subjects you need
          tutoring for and share your current GPA or grades.
        </p>
        <form className="grid gap-12 pb-12 pl-5 md:grid-rows-3 md:grid-flow-col">
          <div className="">
            <label
              htmlFor="firstname"
              className="flex items-center font-semibold font-montserrat"
            >
              Grade/Year
            </label>
            <input
              type="text"
              id="grade"
              placeholder="Enter your grade"
              className="px-4 py-2 text-sm bg-white border rounded-lg border-lightgrey w-[368px] h-[62px]"
            />
          </div>

          <div>
            <label
              htmlFor="subjects"
              className="flex items-center font-semibold font-montserrat"
            >
              Subjects Needing Tutoring:
            </label>

            <select
              id="subjects"
              className="p bg-white border rounded-lg border-lightgrey w-[368px] h-[62px]"
            >
              <option value=""> </option>
              <option value="Math">Math</option>
              <option value="English">English</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Physics">Physics</option>
              <option value="Coding">Coding</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="attendance-type"
              className="flex items-center font-semibold font-montserrat"
            >
              Attendance type:
            </label>

            <select
              id="attendance-type"
              className=" bg-white border rounded-lg border-lightgrey w-[368px] h-[62px]"
            >
              <option value=""> </option>
              <option value="Online">Online</option>
              <option value="In person">In person</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="location"
              className="flex items-center font-semibold font-montserrat pb-2"
            >
              Current Location:
            </label>
            <input
              type="location"
              id="location"
              placeholder="Enter your current location, country, state"
              className="px-4 py-4 bg-white border rounded-lg border-lightgrey text-sm w-[368px] h-[62px] md:w-96"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AcademicDetails;
