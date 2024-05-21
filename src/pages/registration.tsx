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
          className="absolute pt-4 pl-4 w-auto h-auto"
        />

        {/* Title */}
        <h1 className="text-3xl mt-20 mb-8 font-montserrat font-bold text-center">
          Student Registration | Personal Information
        </h1>
      </div>

      {/* Tabs */}
      <section className="border-t border-b w-fit self-center border-ash">
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
            onClick={() => {
              handleTabClick(2);
              // navigate("/academicDetails");
            }}
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
            onClick={() => {
              handleTabClick(3);
              // navigate("/preferences");
            }}
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
            onClick={() => {
              handleTabClick(4);
              // navigate("/learningGoals");
            }}
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
            onClick={() => {
              handleTabClick(5);
              // navigate("/termsAndConditions");
            }}
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
        className={`border border-lightgrey rounded-2xl pt-4 pb-4 mt-10 mr-10 ml-10 shadow-lg pr-5 flex ${
          activeTab === 1 ? "justify-end" : "justify-between"
        }`}
      >
        <button
          className={`border border-blue rounded-md ml-10 pl-12 pr-12 ${
            activeTab === 1 ? "hidden" : "block"
          }`}
          onClick={() => {
            setActiveTab((prev) => prev - 1);
          }}
        >
          <p className="text-blue font-montserrat font-semibold">
            Return to Previous Location
          </p>
        </button>
        <button
          className="flex items-center bg-lightblue text-white gap-10 pl-10 py-3 px-5 rounded-lg"
          onClick={() => {
            setActiveTab((prev) => prev + 1);
          }}
        >
          Next
          <img src={next} alt="next symbol" />
        </button>
      </div>
    </div>
  );
};

export default Registration;
