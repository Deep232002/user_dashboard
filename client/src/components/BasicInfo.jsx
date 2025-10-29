import React from "react";
import image from "../assets/IMG_20250727_221834.jpg";

const BasicInfo = ({ info }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Note added successfully!");
  };

  // Prevent rendering if data not loaded yet
  if (!info) {
    return (
      <div className="w-full h-full flex justify-center items-center text-gray-500">
        Loading Basic Info...
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col items-center p-5">
      <img
        src={info.profile_picture}
        alt="profile"
        className="w-24 h-24 rounded-full object-cover shadow-md"
      />

      <div className="text-2xl mt-5 font-bold text-gray-700">{info.name}</div>
      <div className="text-gray-600">{info.title}</div>

      <p className="mt-5 text-center text-gray-600 max-w-md">{info.about}</p>

      <div className="w-full mt-5">
        <h1 className="font-bold text-lg text-gray-700 mb-2">Skills</h1>
        <div className="flex flex-wrap gap-2">
          {info.skills?.map((skill, index) => (
            <span
              key={index}
              className="py-1 px-4 bg-gray-200 rounded-2xl text-sm text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full mt-8">
        <h1 className="font-bold text-lg text-gray-700 mb-3">Add Notes</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Add notes for future reference"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default BasicInfo;

