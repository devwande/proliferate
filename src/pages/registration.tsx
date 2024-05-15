import proliferate from "../assets/proliferate.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInformation from "./PersonalInformation";
import AcademicDetails from "./AcademicDetails";

const Registration = () => {
const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const renderForm = () => {
    switch (activeTab) {
      case 1:
        return <PersonalInformation />;
      // Add cases for other tabs if needed
      default:
        return null;
    }
};
  
  return (
    <div className="flex flex-col h-screen">
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
            onClick={() => {handleTabClick(2); navigate("/academicDetails"); }}
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
      {renderForm()}
      {/* {PersonalInformation()} */}
    </div>
  );
};

export default Registration;
