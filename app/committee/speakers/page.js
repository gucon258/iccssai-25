"use client";
import React from "react";

const speakers = [
  {
    name: "Dr. Sudeendra Koushik",
    position: "President TEMS",
    organization: "",
    imgSrc: "/ImportantPersons/sudeendra.jpeg"
  },
  {
    name: "Prof. (Dr.) S.N. Singh",
    position: "Director",
    organization: "ABV-IIITM, Gwalior, India",
    imgSrc: "/ImportantPersons/snsingh.png"
  },
  {
    name: "Dr. Mrutyunjay Mohapatra",
    position: "Director General of Meteorology",
    organization: "",
    imgSrc: "/ImportantPersons/mrutyunjay mohapatra.jpeg"
  },
  {
    name: "Prof. (Dr.) Yogesh S. Chauhan",
    position: "Professor, IIT Kanpur",
    organization: "Chair, IEEE UP Section",
    imgSrc: "/ImportantPersons/yogesh.png"
  },
  {
    name: "Dr. Mohammad Rihan",
    position: "Chair Elect",
    organization: "IEEE UP Section",
    imgSrc: "/ImportantPersons/mohammadrihan.jpg"
  },
  {
    name: "Prof. Asheesh K. Singh",
    position: "Professor",
    organization: "MNNIT Allahabad",
    imgSrc: "/ImportantPersons/asheeshsingh.jpg"
  },
  {
    name: "Dr. Rajeev Kr. Singh",
    position: "Professor, IIT BHU",
    organization: "Secretary, IEEE UP Section",
    imgSrc: "/ImportantPersons/rajeev singh.jpeg"
  },
  {
    name: "Dr. Varun Kakkar",
    position: "Jt. Secretary",
    organization: "IEEE UP Section",
    imgSrc: "/ImportantPersons/varunkakar.jpg"
  },
  {
    name: "Dr. Dac Nhuong Le",
    position: "Associate Professor",
    organization: "Haiphong University, Vietnam",
    imgSrc: "/ImportantPersons/dac nhuong le.jpeg"
  },
  {
    name: "Fred Schindler",
    position: "Member",
    organization: "IEEE Board of Directors",
    imgSrc: "/ImportantPersons/fred.jpeg"
  },
  {
    name: "Prof. (Dr.) Harivardhagini Subhadra",
    position: "Professor, CVR College of Engineering",
    organization: "IEEE WIE Committee Member",
    imgSrc: "/ImportantPersons/harivardhagini.jpeg"
  }
];

export default function KeynoteSpeakers() {
  return (
    <div className="py-6">
      <h2 className="text-center text-3xl font-bold">Keynote Speakers</h2>
      <p className="text-center text-gray-600 mb-6">
        International Conference on Computing, Systems, and AI
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {speakers.map((speaker, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-red-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            >
              <img
                className="w-32 h-32 mx-auto rounded-full border-4 border-orange-400 object-cover"
                src={speaker.imgSrc || "/reshot-icon-user-ZXFJAEQURK.svg"}
                alt={speaker.name}
                onError={(e) => { e.target.src = "/reshot-icon-user-ZXFJAEQURK.svg" }}
              />
              <h3 className="text-xl font-semibold text-red-600 mt-4">
                {speaker.name}
              </h3>
              {speaker.position && (
                 <p className="text-gray-700 mt-2 font-medium">{speaker.position}</p>
              )}
              {speaker.organization && (
                 <p className="text-gray-500 text-sm mt-1">{speaker.organization}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
