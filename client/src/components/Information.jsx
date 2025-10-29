import { Download, Mail } from "lucide-react";
import React from "react";

const Information = ({info}) => {

  return (
    <div className="px-5 py-5 bg-white rounded-xl shadow-md">
      <h1 className="font-bold text-lg text-gray-700 mb-4">
        Basic Information
      </h1>

      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex flex-col min-w-[45%] sm:min-w-[30%]">
          <h3 className="text-gray-500 text-sm">Age</h3>
          <p className="text-gray-800 font-medium">{info.age}</p>
        </div>

        <div className="flex flex-col min-w-[45%] sm:min-w-[30%]">
          <h3 className="text-gray-500 text-sm">Experience</h3>
          <p className="text-gray-800 font-medium">{info.experience}</p>
        </div>

        <div className="flex flex-col min-w-[45%] sm:min-w-[30%]">
          <h3 className="text-gray-500 text-sm">Phone Number</h3>
          <p className="text-gray-800 font-medium">{info.phone_no}</p>
        </div>

        <div className="flex flex-col min-w-[45%] sm:min-w-[30%]">
          <h3 className="text-gray-500 text-sm">Email</h3>
          <p className="text-gray-800 font-medium break-all">{info.email}</p>
        </div>

        <div className="flex flex-col min-w-[45%] sm:min-w-[30%]">
          <h3 className="text-gray-500 text-sm">CTC</h3>
          <p className="text-gray-800 font-medium">{info.ctc}</p>
        </div>

        <div className="flex flex-col min-w-[45%] sm:min-w-[30%]">
          <h3 className="text-gray-500 text-sm">Location</h3>
          <p className="text-gray-800 font-medium">{info.location}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-6">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-white border hover:text-blue-600 hover:border-blue-600 transition">
          <Download className="w-4 h-4" /> Download Resume
        </button>
        <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
          <Mail className="w-4 h-4" /> Send Email
        </button>
      </div>
    </div>
  );
};

export default Information;
