import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Education = ({education}) => {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div className="px-5 py-4 bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div
        className="w-full flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-bold text-lg text-gray-700">Education</h1>
        <ChevronUp
          className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>

      {/* Education Details */}
      {isOpen && (
        <div className="w-full mt-5 space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-4 items-center">
              {/* Circle Badge with Short Code */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-400 text-white font-semibold text-lg border-2 border-purple-600">
                {edu.shortCode}
              </div>

              <div>
                <div className="font-semibold text-gray-800">{edu.degree}</div>
                <div className="text-sm text-gray-600">{edu.college}</div>
                <div className="text-xs text-gray-500">
                  {edu.duration} | {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;
