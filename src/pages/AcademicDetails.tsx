const AcademicDetails = () => {
  return (
    <>
      <div className="flex flex-col border border-lightgrey rounded-2xl pt-4 pb-10 mr-10 ml-10 shadow-lg">
        <p className="pb-10 self-center text-center flex font-normal font-opensans content-center w-2/3">
          
          Please enter the name of your school, college, or university, along
          with your grade or year of study. Select the subjects you need
          tutoring for and share your current GPA or grades.
          
        </p>
        <form className="grid grid-rows-3 grid-flow-col gap-12 pb-12 pl-12">
          <div className="">
            <label
              htmlFor="firstname"
              className="font-montserrat font-semibold flex items-center"
            >
              Grade/Year
            </label>
            <input
              type="text"
              id="grade"
              placeholder="Enter your grade"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="subjects"
              className="font-montserrat font-semibold flex items-center"
            >
              Subjects Needing Tutoring:
            </label>

            <select
              id="subjects"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2 w-52"
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
              className="font-montserrat font-semibold flex items-center"
            >
              Attendance type:
            </label>

            <select
              id="attendance-type"
              className="bg-white border border-lightgrey rounded-lg px-4 py-2 w-52"
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
              className="font-montserrat font-semibold flex items-center"
            >
              Current Location:
            </label>
            <input
              type="location"
              id="location"
              placeholder="Enter your current location, country, state"
              className="bg-white border  border-lightgrey rounded-lg px-4 py-2 w-96"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AcademicDetails;
