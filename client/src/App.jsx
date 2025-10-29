import React, { useState, useEffect } from "react";
import BasicInfo from "./components/BasicInfo";
import Information from "./components/Information";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";

const App = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/profile")
      .then((res) => res.json())
      .then((data) => setProfileData(data))
      .catch((err) => console.error("Error loading profile data:", err));
  }, []);

  if (!profileData) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-purple-200 via-pink-100 to-orange-100">
        <p className="text-lg font-semibold text-gray-700">Loading profile...</p>
      </div>
    );
  }

  return (
    <div
      className="w-screen h-screen flex flex-col md:flex-row gap-6
      pt-6 md:pt-10 px-4 md:px-10 
      bg-gradient-to-br from-indigo-100 via-rose-100 to-amber-100
      overflow-auto"
    >
      <div
        className="w-full md:w-[30%] bg-white rounded-t-2xl shadow-xl 
        p-4 md:p-6 
        md:overflow-y-auto scrollbar-hide"
      >
        <BasicInfo info={profileData.basicInfo} />
      </div>

  
      <div
        className="w-full md:w-[70%] bg-white rounded-t-2xl shadow-xl 
        flex flex-col gap-6 p-4 md:p-6
        md:overflow-y-auto scrollbar-hide"
      >
        <Information info={profileData.basicInfo} />
        <Experience experiences={profileData.experience} />
        <Education education={profileData.education} />
        <Projects projects={profileData.projects} />
      </div>
    </div>
  );
};

export default App;
