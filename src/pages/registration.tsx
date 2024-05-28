import proliferate from "../assets/proliferate.svg";
import { useState } from "react";
import next from "../assets/images/next.png";
import PersonalInformation from "./PersonalInformation";
import AcademicDetails from "./AcademicDetails";
import Preferences from "./Preferences";
import LearningGoals from "./LearningGoals";
import TermsAndConditions from "./TermsAndConditions";

const Registration = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col">
      {/* Logo and Title */}
      <div className="relative">
        {/* Logo */}
        <img
          src={proliferate}
          alt="proliferate-logo"
          className="w-1/2 h-auto pt-8 pl-8 md:absolute md:pt-20 md:pl-20 md:w-auto"
        />
        {/* MOBILE TITLE */}
        <div className="w-full mt-[20px] bg-darkblue py-4 md:hidden flex justify-center">
          <h1 className="text-lg font-bold text-white font-montserrat">
            Student Registration | Personal Information
          </h1>
        </div>
        {/* Title */}
        <h1 className="hidden mt-20 mb-8 text-3xl font-bold text-center md:block font-montserrat">
          Student Registration | Personal Information
        </h1>
      </div>

      {/* Tabs */}
      <section className="self-center hidden border-t border-b md:block w-fit border-ash">
        <div className="flex justify-center">
          {/* Personal Information Tab */}
          <button
            onClick={() => handleTabClick(1)}
            className={`px-4 py-2 border-r border-l border-black ${
              activeTab === 1
                ? "bg-lightblue text-white"
                : "bg-white text-black"
            }`}
          >
            Personal Information
          </button>

          {/* Academic Details Tab */}
          <button
            onClick={() => handleTabClick(2)}
            className={`px-4 py-2 border-r border-black ${
              activeTab === 2
                ? "bg-lightblue text-white"
                : "bg-white text-black"
            }`}
          >
            Academic Details
          </button>

          {/* Preferences Tab */}
          <button
            onClick={() => handleTabClick(3)}
            className={`px-4 py-2 border-r border-black ${
              activeTab === 3
                ? "bg-lightblue text-white"
                : "bg-white text-black"
            }`}
          >
            Preferences
          </button>

          {/* Learning Goals Tab */}
          <button
            onClick={() => handleTabClick(4)}
            className={`px-4 py-2 border-r border-black ${
              activeTab === 4
                ? "bg-lightblue text-white"
                : "bg-white text-black"
            }`}
          >
            Learning Goals
          </button>

          {/* Terms & Conditions Tab */}
          <button
            onClick={() => handleTabClick(5)}
            className={`px-4 py-2 border-r border-black ${
              activeTab === 5
                ? "bg-lightblue text-white"
                : "bg-white text-black"
            }`}
          >
            Terms & Conditions
          </button>
        </div>
      </section>
      {activeTab === 1 && <PersonalInformation />}
      {activeTab === 2 && <AcademicDetails />}
      {activeTab === 3 && <Preferences />}
      {activeTab === 4 && <LearningGoals />}
      {activeTab === 5 && <TermsAndConditions />}

      <div
        className={`md:border border-lightgrey rounded-2xl pt-4 pb-4 mt-10 md:mr-10 ml-10 md:shadow-lg pr-5 flex ${
          activeTab === 1 ? "justify-end" : "justify-between space-x-12"
        }`}
      >
        {/* MOBILE LOWER BUTTONS */}
        {activeTab > 1 && (
          <button
            className="border border-blue rounded-md pl-12 pr-12 block md:hidden"
            onClick={() => setActiveTab((prev) => prev - 1)}
          >
            <p className="font-semibold text-blue font-montserrat">Back</p>
          </button>
        )}
        <button
          className="flex items-center gap-10 px-5 py-3 pl-10 text-white rounded-lg bg-lightblue block md:hidden"
          onClick={() => setActiveTab((prev) => prev + 1)}
        >
          Next
          <img src={next} alt="next symbol" />
        </button>

        {/* WEB LOWER BUTTONS */}
        {activeTab > 1 && (
          <button
            className="border border-blue rounded-md ml-10 pl-12 pr-12 hidden md:block"
            onClick={() => setActiveTab((prev) => prev - 1)}
          >
            <p className="font-semibold text-blue font-montserrat">
              Return to Previous Location
            </p>
          </button>
        )}
        <button
          className="flex items-center gap-10 px-7 py-3 pr-10 text-white rounded-lg bg-lightblue hidden md:flex"
          onClick={() => setActiveTab((prev) => prev + 1)}
        >
          Next
          <span>
            <img src={next} alt="next symbol" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Registration;
