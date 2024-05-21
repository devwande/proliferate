const LearningGoals = () => {
  return (
    <>
      <div className="flex flex-col border border-lightgrey rounded-2xl pt-4 mr-10 ml-10 shadow-lg">
        <p className="self-center text-center flex font-normal font-opensans content-center w-2/3">
          Describe any challenges and short-term goals you want to achieve.
          Outline your long-term goals. This information will help us tailor the
          tutoring experience to meet your needs.
        </p>

        <form className="pb-12 gap-12 pl-12 space-y-5">
          <div>
            <label
              htmlFor="short-term"
              className="font-montserrat font-semibold flex items-center"
            >
              Short-term Goals:
            </label>
            <textarea
              name="short-term"
              id="short-term"
              placeholder="Enter your short term goal"
              className="bg-white border border-lightgrey rounded-lg px-4 py-16 w-1/2 "
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="long-term"
              className="font-montserrat font-semibold flex items-center"
            >
              Long-term Goals:
            </label>
            <textarea
              name="short-term"
              id="short-term"
              placeholder="Enter your short term goal"
              className="bg-white border border-lightgrey rounded-lg px-4 py-16 w-1/2 "
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default LearningGoals;
