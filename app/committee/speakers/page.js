"use client";
import React from "react";
import { Award, Sparkles, Mic, Calendar, Building2, Info } from "lucide-react";

const featuredSpeaker = {
  name: "Manfred “Fred” J. Schindler",
  designation: "2027 IEEE President-Elect",
  conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI)",
  topic: "To be announced",
  bio1: "Manfred “Fred” J. Schindler has been elected 2027 IEEE President-Elect, reflecting his distinguished leadership and longstanding engagement with the global engineering and technology community.",
  bio2: "His leadership brings a valuable perspective to conversations on the future of computing, technological innovation, and the advancement of the global IEEE community.",
  note: "Speaker participation and keynote topic to be announced upon official confirmation.",
  imgSrc: "/ImportantPersons/manfred_fred_schindler.jpg"
};

const speakers = [
  {
    name: "Manfred “Fred” J. Schindler",
    position: "2027 IEEE President-Elect",
    organization: "International Conference on Communication, Security, and Artificial Intelligence",
    imgSrc: "/ImportantPersons/manfred_fred_schindler.jpg"
  },
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
    name: "Prof. (Dr.) Harivardhagini Subhadra",
    position: "Professor, CVR College of Engineering",
    organization: "IEEE WIE Committee Member",
    imgSrc: "/ImportantPersons/harivardhagini.jpeg"
  }
];

export default function KeynoteSpeakers() {
  return (
    <div className="min-h-screen bg-gray-50 bg-[url('/bg-pattern.svg')]">
      {/* Hero Section Banner matching ICCSAI Theme */}
      <div className="relative py-16 md:py-20 bg-gradient-to-br from-[#4E0000] via-[#7B1111] to-[#BE2727] overflow-hidden">
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F96604] rounded-full blur-[140px] opacity-25 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#024CAD] rounded-full blur-[140px] opacity-30 pointer-events-none"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Keynote Speakers
          </h1>
          <p className="text-base md:text-xl text-rose-100 max-w-2xl mx-auto font-light leading-relaxed">
            International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)
          </p>
          <div className="w-24 h-1.5 bg-[#F8C907] mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Main Content Showcase */}
      <div className="container mx-auto py-14 px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Executive Keynote Speaker Card */}
        <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-200/70 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Top Tri-Color Accent Line (Crimson, Orange, IEEE Blue) */}
          <div className="h-2 w-full bg-gradient-to-r from-[#BE2727] via-[#F96604] to-[#024CAD]"></div>

          <div className="p-6 sm:p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Left Column: Speaker Portrait & IEEE Badge */}
              <div className="w-full sm:w-72 md:w-80 lg:w-72 flex-shrink-0 flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 bg-slate-50 group">
                  <img
                    src={featuredSpeaker.imgSrc}
                    alt={featuredSpeaker.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
                </div>

                {/* IEEE Leadership Tag */}
                <div className="mt-4 w-full bg-blue-50/80 border border-blue-200/60 rounded-xl py-2 px-3 flex items-center justify-center gap-2 text-[#024CAD] text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Award className="w-4 h-4 text-[#024CAD]" />
                  <span>IEEE Global Leadership</span>
                </div>
              </div>

              {/* Right Column: Speaker Details & Content */}
              <div className="flex-1 flex flex-col text-center lg:text-left">
                {/* Category Pill Tag */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-red-50 text-[#BE2727] border border-red-200/80">
                    <Sparkles className="w-3.5 h-3.5 text-[#BE2727]" />
                    Keynote Speaker
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                    ICCSAI 2026
                  </span>
                </div>

                {/* Speaker Name */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                  {featuredSpeaker.name}
                </h2>

                {/* Designation */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="text-lg sm:text-xl font-bold text-[#024CAD]">
                    {featuredSpeaker.designation}
                  </span>
                </div>

                {/* Conference line */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-gray-600 mb-6">
                  <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0 hidden sm:inline" />
                  <span>{featuredSpeaker.conference}</span>
                </div>

                {/* Structured Keynote Topic Box */}
                <div className="rounded-2xl bg-gradient-to-r from-amber-50/90 via-orange-50/40 to-transparent border border-amber-200/80 p-4 sm:p-5 mb-6 text-left shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                      <Mic className="w-4 h-4 text-amber-700" />
                      <span>Keynote Topic</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80">
                      <Calendar className="w-3 h-3 text-amber-700" />
                      To be announced
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    Topic presentation title and keynote session schedule will be announced upon official confirmation.
                  </p>
                </div>

                {/* Bio Section with Conference Accent */}
                <div className="border-l-4 border-[#BE2727] pl-4 sm:pl-5 space-y-3 mb-6 text-left bg-red-50/30 py-3.5 pr-4 rounded-r-2xl">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                    {featuredSpeaker.bio1}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {featuredSpeaker.bio2}
                  </p>
                </div>

                {/* Official Confirmation Note */}
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500 text-left">
                  <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>{featuredSpeaker.note}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Speakers Notice */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 text-sm font-semibold hover:shadow-lg transition-shadow">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Additional Keynote Speakers & Technical Sessions will be announced soon
          </div>
          <p className="text-xs text-gray-500 mt-3 font-normal">
            Stay tuned as we finalize the distinguished speaker lineup for ICCSAI 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
