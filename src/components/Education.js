"use client";

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? education.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === education.length - 1 ? 0 : prevIndex + 1
    );
  };

  const education = [
    {
      degree: "Master's Degree, Physiotherapy",
      university: 'Cardiff University / Prifysgol Caerdydd',
      duration: 'Sep 2023 - Mar 2024',
      points: [
        'Musculoskeletal Physiotherapy (MSK): Comprehensive understanding and hands-on experience in MSK assessment and treatment.',
        'Kinesiology: Explored biomechanics and physiological processes behind human movement.',
        'Pain Management: Developed knowledge of pain mechanisms and strategies for effective treatment.',
        'Patient Education: Focused on educating patients about recovery processes and preventive care.',
        'Research Methodologies: Engaged in research projects, gaining skills in evidence-based practice.',
      ],
    },
    {
      degree: "Bachelor's Degree, Physiotherapy",
      university: 'Garden City University',
      duration: 'Aug 2017 - Jul 2022',
      points: [
        'Internship: Completed a 6-month internship at Apollo Hospitals, focusing on musculoskeletal and post-surgical rehabilitation.',
        'Leadership: Led a team of junior physiotherapists during clinical rotations.',
        'Organizational Skills: Developed excellent organizational skills through patient management.',
        'Sports Physiotherapy: Gained experience working with athletes for injury prevention and rehabilitation.',
        'Research Projects: Participated in research projects focused on physiotherapy techniques and outcomes.',
        'Neurological Rehabilitation: Worked with patients recovering from neurological conditions.',
      ],
    },
  ];

  return (
    <div className="relative px-4 sm:px-8 lg:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 text-left">
        Education
      </h2>

      {/* Education Content */}
      <div className="overflow-hidden relative">
        {/* Main Education Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {education.map((edu, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
              style={{ flexBasis: '100%' }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-left">
                {edu.university}
              </h3>
              <p className="text-lg font-medium text-gray-600 text-left mb-4">
                {edu.degree}
              </p>
              <p className="text-sm font-medium text-gray-500 text-left mb-4">
                {edu.duration}
              </p>
              <EducationDetails points={edu.points} />
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        {education.length > 1 && (
          <>
            <button
              className="absolute top-1/2 left-1 transform -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800 focus:outline-none z-10"
              onClick={handlePrev}
              aria-label="Previous Degree"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800 focus:outline-none z-10"
              onClick={handleNext}
              aria-label="Next Degree"
            >
              <FaArrowRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function EducationDetails({ points }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <ul className="list-disc list-inside text-gray-700 text-left">
        {isExpanded
          ? points.map((point, idx) => (
              <li key={idx} className="mb-2">
                {point}
              </li>
            ))
          : points.slice(0, 2).map((point, idx) => (
              <li key={idx} className="mb-2">
                {point}
              </li>
            ))}
      </ul>
      {points.length > 2 && (
        <button
          className="mt-2 text-blue-600 hover:underline focus:outline-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'View Less' : 'View More'}
        </button>
      )}
    </div>
  );
}
