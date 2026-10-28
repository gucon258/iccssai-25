"use client";
import React from "react";
import { Award, Sparkles, Mic, Calendar, Building2, Info } from "lucide-react";

const keynoteSpeakers = [
  {
    name: "Prof. (Dr.) Hironori Washizaki",
    primaryRole: "IEEE Computer Society 2025 President",
    leadershipBadge: "IEEE Computer Society President",
    affiliations: [
      {
        role: "Professor & Deputy Chief Information Officer",
        organization: "Waseda University, Tokyo, Japan"
      },
      {
        role: "Visiting Professor",
        organization: "National Institute of Informatics (NII), Japan"
      },
      {
        role: "Advisor & Outside Director",
        organization: "SI&C Co., Ltd. / eXmotion Co., Ltd."
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Prof. (Dr.) Hironori Washizaki serves as the IEEE Computer Society 2025 President and is Professor & Deputy Chief Information Officer at Waseda University, Tokyo.",
    bio2: "He also serves as Visiting Professor at the National Institute of Informatics (NII), Advisor to SI&C Co., Ltd., and Outside Director of eXmotion Co., Ltd.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/hironori_washizaki.jpg"
  },
  {
    name: "Manfred “Fred” J. Schindler",
    primaryRole: "2027 IEEE President-Elect",
    leadershipBadge: "2027 IEEE President-Elect",
    affiliations: [
      {
        role: "2027 IEEE President-Elect",
        organization: "Institute of Electrical and Electronics Engineers (IEEE)"
      },
      {
        role: "Distinguished Leader & Consultant",
        organization: "Global Technology & Microwave Industry"
      },
      {
        role: "Past President & Division Director",
        organization: "IEEE Microwave Theory & Technology Society (MTT-S)"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Manfred “Fred” J. Schindler has been elected 2027 IEEE President-Elect, reflecting his distinguished leadership and longstanding engagement with the global engineering and technology community.",
    bio2: "His leadership brings a valuable perspective to conversations on the future of computing, technological innovation, and the advancement of the global IEEE community.",
    note: "Speaker participation and keynote topic to be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/manfred_fred_schindler.jpg"
  },
  {
    name: "Prof. (Dr.) Sri Niwas Singh",
    primaryRole: "Director, ABV-IIITM Gwalior | IEEE Fellow",
    leadershipBadge: "Director, ABV-IIITM & Advisor IEEE UP",
    affiliations: [
      {
        role: "Director",
        organization: "ABV-IIITM, Gwalior, India"
      },
      {
        role: "Professor (HAG)",
        organization: "Dept. of Electrical Eng., IIT Kanpur"
      },
      {
        role: "Advisor & Past Chair",
        organization: "IEEE Uttar Pradesh Section"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Prof. (Dr.) Sri Niwas Singh serves as the Director of ABV-IIITM, Gwalior and is a Professor (HAG) in the Department of Electrical Engineering at IIT Kanpur, India.",
    bio2: "An IEEE Fellow and FNAE, he serves as Advisor to the IEEE Uttar Pradesh Section, having previously served as Chair of IEEE India Council and IEEE UP Section.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/Prof. (Dr.) Sri Niwas Singh.jpg"
  },
  {
    name: "Dr. Rajeev Kumar Singh",
    primaryRole: "Secretary, IEEE UP Section | Professor, IIT (BHU)",
    leadershipBadge: "Secretary, IEEE UP Section",
    affiliations: [
      {
        role: "Professor",
        organization: "Dept. of Electrical Eng., IIT (BHU) Varanasi"
      },
      {
        role: "Secretary",
        organization: "IEEE Uttar Pradesh Section"
      },
      {
        role: "Senior Member",
        organization: "IEEE & Distinguished Academic Leader"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Dr. Rajeev Kumar Singh is a Professor in the Department of Electrical Engineering at the Indian Institute of Technology (BHU), Varanasi, India.",
    bio2: "He serves as the Secretary of the IEEE Uttar Pradesh Section, steering regional technical programs and advancing academic-industry engagement in emerging technologies.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/Dr. Rajeev Kumar Singh.jpg"
  },
  {
    name: "Prof. (Dr.) Asheesh Kumar Singh",
    primaryRole: "Professor, MNNIT Allahabad | Past Chair, IEEE UP",
    leadershipBadge: "Professor, MNNIT Allahabad",
    affiliations: [
      {
        role: "Professor",
        organization: "Dept. of Electrical Eng., MNNIT Allahabad, Prayagraj"
      },
      {
        role: "Past Chairman",
        organization: "IEEE Uttar Pradesh Section"
      },
      {
        role: "Senior Member",
        organization: "IEEE & Distinguished Power Systems Scholar"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Prof. (Dr.) Asheesh Kumar Singh is a Professor in the Department of Electrical Engineering at Motilal Nehru National Institute of Technology (MNNIT) Allahabad, Prayagraj, India.",
    bio2: "He is a Senior Member of IEEE and past Chairman of IEEE UP Section, with extensive contributions to power systems, smart grids, and international technical conferences.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/Prof. (Dr.) Asheesh Kumar Singh.jpg"
  },
  {
    name: "Prof. (Dr.) B. K. Panigrahi",
    primaryRole: "Professor, IIT Delhi | IEEE Fellow | Head, CART",
    leadershipBadge: "Professor, IIT Delhi & IEEE Fellow",
    affiliations: [
      {
        role: "Professor",
        organization: "Dept. of Electrical Engineering, IIT Delhi, India"
      },
      {
        role: "Head, CART",
        organization: "Centre for Automotive Research & Tribology, IIT Delhi"
      },
      {
        role: "IEEE Fellow",
        organization: "Institute of Electrical and Electronics Engineers (IEEE)"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Prof. (Dr.) B. K. Panigrahi is a Professor in the Department of Electrical Engineering and Head of the Centre for Automotive Research and Tribology (CART) at IIT Delhi, India.",
    bio2: "An IEEE Fellow and globally recognized researcher, his expertise spans AI applications in energy systems, smart grid security, electric vehicles, and intelligent computing.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/Prof. (Dr.) B. K. Panigrahi.jpg"
  },
  {
    name: "Mr. Deepak Mathur",
    primaryRole: "2024 IEEE Vice President (MGA) | Past Director, IEEE R10",
    leadershipBadge: "2024 IEEE Vice President (MGA)",
    affiliations: [
      {
        role: "2024 Vice President",
        organization: "IEEE Member & Geographic Activities (MGA)"
      },
      {
        role: "Member",
        organization: "IEEE Governance Committee"
      },
      {
        role: "Past Director",
        organization: "IEEE Region 10 (Asia-Pacific)"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Mr. Deepak Mathur served as the 2024 IEEE Vice President for Member and Geographic Activities (MGA) and serves on the IEEE Governance Committee.",
    bio2: "With extensive global engineering and executive leadership, he previously served as Director of IEEE Region 10 (Asia-Pacific), championing international collaboration and professional advancement.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/Mr. Deepak Mathur.jpg"
  },
  {
    name: "Prof. (Dr.) Mohd Rihan",
    primaryRole: "Director General, NISE, India | Chair-Elect, IEEE UP",
    leadershipBadge: "DG, NISE & Chair-Elect IEEE UP",
    affiliations: [
      {
        role: "Director General",
        organization: "National Institute of Solar Energy (NISE), India"
      },
      {
        role: "Chair-Elect",
        organization: "IEEE Uttar Pradesh Section"
      },
      {
        role: "Professor",
        organization: "Dept. of Electrical Engineering, AMU Aligarh, India"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Prof. (Dr.) Mohd Rihan serves as the Director General of the National Institute of Solar Energy (NISE), an autonomous institute of the Ministry of New and Renewable Energy, Govt. of India.",
    bio2: "He is also Professor of Electrical Engineering at AMU Aligarh and the Chair-Elect of the IEEE Uttar Pradesh Section, leading advancements in smart grids and sustainable energy systems.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/Prof. (Dr.) Mohd Rihan.jpg"
  },
  {
    name: "Dr. Sudeendra Koushik",
    primaryRole: "President, IEEE TEMS | Innovation & IP Leader",
    leadershipBadge: "President, IEEE TEMS",
    affiliations: [
      {
        role: "President",
        organization: "IEEE Technology & Engineering Management Society (TEMS)"
      },
      {
        role: "Chief Innovator & Director",
        organization: "Prashak Techno Enterprises / Innovation Consultant"
      },
      {
        role: "Senior Member",
        organization: "Institute of Electrical and Electronics Engineers (IEEE)"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Dr. Sudeendra Koushik serves as President of the IEEE Technology and Engineering Management Society (TEMS) and is an internationally acclaimed innovation director and patent holder.",
    bio2: "He has spearheaded technological innovation and management initiatives globally, empowering organizations and young professionals in sustainable engineering leadership.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/Dr. Sudeendra Koushik.jpg"
  },
  {
    name: "Prof. (Dr.) Yogesh S. Chauhan",
    primaryRole: "Chair, IEEE UP Section | Professor, IIT Kanpur | IEEE Fellow",
    leadershipBadge: "Chair, IEEE UP Section & IEEE Fellow",
    affiliations: [
      {
        role: "Chair",
        organization: "IEEE Uttar Pradesh Section"
      },
      {
        role: "Professor",
        organization: "Dept. of Electrical Engineering, IIT Kanpur, India"
      },
      {
        role: "IEEE Fellow",
        organization: "Institute of Electrical and Electronics Engineers (IEEE)"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Prof. (Dr.) Yogesh S. Chauhan is an IEEE Fellow and Professor in the Department of Electrical Engineering at the Indian Institute of Technology (IIT) Kanpur, India.",
    bio2: "He serves as the Chair of the IEEE Uttar Pradesh Section, and is internationally recognized for his pioneering contributions to semiconductor device modeling and nanoelectronics.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/Prof. (Dr.) Yogesh S. Chauhan.jpg"
  },
  {
    name: "Prof. (Dr.) Janakarajan Ramkumar",
    primaryRole: "Professor, ME & Design, IIT Kanpur | Former Dean (Planning)",
    leadershipBadge: "Professor, IIT Kanpur",
    affiliations: [
      {
        role: "Professor",
        organization: "Dept. of Mechanical Eng. & Design, IIT Kanpur"
      },
      {
        role: "Past Chairman",
        organization: "IEEE Uttar Pradesh Section"
      },
      {
        role: "Former Dean",
        organization: "Planning & Infrastructure, IIT Kanpur"
      }
    ],
    conference: "International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2026)",
    topic: "To be announced",
    bio1: "Prof. (Dr.) Janakarajan Ramkumar is a Professor in the Department of Mechanical Engineering and Design Program at the Indian Institute of Technology (IIT) Kanpur, India.",
    bio2: "He has served as Chairman of the IEEE Uttar Pradesh Section and Dean (Planning) at IIT Kanpur, leading advanced research in micro/nano-manufacturing, smart systems, and design innovation.",
    note: "Keynote presentation title and session schedule will be announced upon official confirmation.",
    imgSrc: "/ImportantPersons/Prof. (Dr.) Janakarajan Ramkumar.jpg"
  }
];

export const previousSpeakers = [
  {
    name: "Prof. (Dr.) Hironori Washizaki",
    position: "IEEE Computer Society 2025 President",
    organization: "Professor & Deputy CIO, Waseda University, Tokyo",
    imgSrc: "/ImportantPersons/hironori_washizaki.jpg"
  },
  {
    name: "Manfred “Fred” J. Schindler",
    position: "2027 IEEE President-Elect",
    organization: "International Conference on Communication, Security, and Artificial Intelligence",
    imgSrc: "/ImportantPersons/manfred_fred_schindler.jpg"
  },
  {
    name: "Dr. Sudeendra Koushik",
    position: "President",
    organization: "IEEE TEMS",
    imgSrc: "/ImportantPersons/Dr. Sudeendra Koushik.jpg"
  },
  {
    name: "Prof. (Dr.) Sri Niwas Singh",
    position: "Director",
    organization: "ABV-IIITM, Gwalior, India",
    imgSrc: "/ImportantPersons/Prof. (Dr.) Sri Niwas Singh.jpg"
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
    imgSrc: "/ImportantPersons/Prof. (Dr.) Yogesh S. Chauhan.jpg"
  },
  {
    name: "Prof. (Dr.) Mohd Rihan",
    position: "Director General, NISE",
    organization: "Chair-Elect, IEEE UP Section",
    imgSrc: "/ImportantPersons/Prof. (Dr.) Mohd Rihan.jpg"
  },
  {
    name: "Prof. (Dr.) Asheesh Kumar Singh",
    position: "Professor",
    organization: "MNNIT Allahabad",
    imgSrc: "/ImportantPersons/Prof. (Dr.) Asheesh Kumar Singh.jpg"
  },
  {
    name: "Dr. Rajeev Kumar Singh",
    position: "Professor, IIT BHU",
    organization: "Secretary, IEEE UP Section",
    imgSrc: "/ImportantPersons/Dr. Rajeev Kumar Singh.jpg"
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
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-stretch">
          {keynoteSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg shadow-gray-200/60 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between h-full"
            >
              {/* Top Tri-Color Accent Line (Crimson, Orange, IEEE Blue) */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#BE2727] via-[#F96604] to-[#024CAD]"></div>

              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Speaker Header with Photo and Badges */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-3.5">
                    {/* Left: Speaker Portrait & IEEE Badge */}
                    <div className="w-28 sm:w-32 flex-shrink-0 flex flex-col items-center">
                      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md border border-gray-100 bg-slate-50 group">
                        <img
                          src={speaker.imgSrc}
                          alt={speaker.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl pointer-events-none"></div>
                      </div>

                      {/* IEEE Leadership Tag */}
                      <div className="mt-2 w-full bg-gradient-to-r from-blue-50 via-indigo-50/60 to-blue-50 border border-blue-200/80 rounded-lg py-1 px-1.5 flex items-center justify-center gap-1 text-[#024CAD] text-[10px] font-bold uppercase tracking-wider shadow-xs text-center leading-tight">
                        <Award className="w-3 h-3 text-[#024CAD] flex-shrink-0" />
                        <span>{speaker.leadershipBadge}</span>
                      </div>
                    </div>

                    {/* Right: Speaker Title & Header Info */}
                    <div className="flex-1 flex flex-col text-center sm:text-left justify-center min-w-0">
                      {/* Category Pill Tag */}
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mb-1.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-red-50 text-[#BE2727] border border-red-200/80">
                          <Sparkles className="w-2.5 h-2.5 text-[#BE2727]" />
                          Keynote Speaker
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                          ICCSAI 2026
                        </span>
                      </div>

                      {/* Speaker Name */}
                      <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-1">
                        {speaker.name}
                      </h2>

                      {/* Primary Leadership Designation */}
                      <div>
                        <span className="text-sm sm:text-base font-bold text-[#024CAD] block">
                          {speaker.primaryRole}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Roles & Affiliations Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3.5">
                    {speaker.affiliations.map((aff, aIdx) => (
                      <div
                        key={aIdx}
                        className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-2.5 flex flex-col justify-between hover:border-red-200 hover:bg-red-50/20 transition-all text-left shadow-2xs"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900 leading-tight mb-1">
                          <Building2 className="w-3.5 h-3.5 text-[#BE2727] flex-shrink-0" />
                          <span className="truncate">{aff.role}</span>
                        </div>
                        <span className="text-[11px] text-gray-500 font-medium leading-tight">
                          {aff.organization}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Compact Keynote Topic Bar */}
                  <div className="rounded-xl bg-amber-50/80 border border-amber-200/80 px-3 py-2 mb-3.5 flex items-center justify-between gap-2 text-left shadow-2xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <Mic className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex-shrink-0">
                        Topic:
                      </span>
                      <span className="text-xs text-gray-700 truncate font-medium">
                        Schedule and keynote presentation to be announced upon confirmation
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/70 flex-shrink-0">
                      <Calendar className="w-2.5 h-2.5 text-amber-700" />
                      TBA
                    </span>
                  </div>

                  {/* Bio Section with Conference Accent */}
                  <div className="border-l-3 border-[#BE2727] pl-3 py-1.5 mb-3.5 text-left bg-gradient-to-r from-red-50/30 to-transparent rounded-r-xl">
                    <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed font-normal">
                      {speaker.bio1}
                    </p>
                    {speaker.bio2 && (
                      <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mt-1">
                        {speaker.bio2}
                      </p>
                    )}
                  </div>
                </div>

                {/* Official Confirmation Note */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-[11px] text-gray-500 text-left mt-auto">
                  <Info className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  <span className="leading-tight truncate">{speaker.note}</span>
                </div>
              </div>
            </div>
          ))}
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
