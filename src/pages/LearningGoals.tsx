const LearningGoals = () => {
  return (
    <>
      <div className="lg:border mt-[-5px] border-lightgrey rounded-2xl pt-4 pb-10 lg:mt-auto lg:mr-10 lg:ml-10 lg:shadow-lg">
        <p className="content-center pb-10 font-normal text-center font-opensans pr-5 pl-3">
          Describe any challenges and short-term goals you want to achieve.
          Outline your long-term goals. This information will help us tailor the
          tutoring experience to meet your needs.
        </p>

        <form className="pb-12 gap-12 pl-6 space-y-5">
          <div>
            <label
              htmlFor="short-term"
              className="font-montserrat font-semibold flex items-center pb-3"
            >
              Short-term Goals:
            </label>
            <textarea
              name="short-term"
              id="short-term"
              placeholder="Enter your short term goal"
              className="bg-white border border-lightgrey rounded-lg px-4 py-4 w-[369px] h-[169px] "
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="long-term"
              className="font-montserrat font-semibold flex items-center pb-3"
            >
              Long-term Goals:
            </label>
            <textarea
              name="short-term"
              id="short-term"
              placeholder="Enter your long term goal"
              className="bg-white border border-lightgrey rounded-lg px-4 py-4 w-[369px] h-[169px] "
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default LearningGoals;
