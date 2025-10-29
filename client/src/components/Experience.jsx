import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Experience = ({experiences}) => {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div className="px-5 py-4 bg-white rounded-xl shadow-sm">
      <div
        className="w-full flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-bold text-lg text-gray-700">Experience</h1>
        <ChevronUp
          className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>

      {isOpen && (
        <div className="w-full mt-5 space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-400 text-white font-semibold text-lg border-2 border-purple-600">
                {exp.shortCode}
              </div>
              <div>
                <div className="font-semibold text-gray-800">{exp.company}</div>
                <div className="text-sm text-gray-600">{exp.position}</div>
                <div className="text-xs text-gray-500">
                  {exp.duration} | {exp.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
