"use client";

import { cards } from "@/utils/slideArray";

// Helper function to format title - uses existing title if present, otherwise defaults to "Professor"
const formatTitle = (position, organization, name) => {
  // High-priority roles that should take priority over generic "Professor"
  const highPriorityRoles = [
    "associate dean", "assistant dean", "dean",
    "associate director", "assistant director", "director",
    "hod", "head of department",
    "pro-vice chancellor", "vice chancellor", "chancellor",
    "ceo", "president"
  ];

  // FIRST: Check if position has a high-priority role
  if (position && position.trim() !== "") {
    const positionLower = position.toLowerCase();
    for (const role of highPriorityRoles) {
      if (positionLower.includes(role)) {
        return position;
      }
    }
  }

  // SECOND: Check if organization contains a high-priority role (like "Associate Dean, DCSE...")
  // This takes priority over a generic "Professor" in position
  if (organization && organization.trim() !== "") {
    const orgLower = organization.toLowerCase();

    for (const role of highPriorityRoles) {
      if (orgLower.includes(role)) {
        // Extract the title part along with department/unit from organization
        const orgParts = organization.split(',').map(p => p.trim());

        // Find which part contains the role
        for (let i = 0; i < orgParts.length; i++) {
          const partLower = orgParts[i].toLowerCase();
          for (const r of highPriorityRoles) {
            if (partLower.includes(r)) {
              // Take this part and possibly the next one if it's a department/unit abbreviation
              let extractedTitle = orgParts[i];

              // Check if next part is a department/unit abbreviation (short name, all caps, etc.)
              if (i + 1 < orgParts.length) {
                const nextPart = orgParts[i + 1].trim();
                // If next part is short (likely a department code like IQAC, SCSE, etc.) 
                // or contains department keywords, include it
                if (nextPart.length <= 10 ||
                  /^[A-Z]{2,}$/.test(nextPart) ||
                  nextPart.toLowerCase().includes("department") ||
                  /^D[A-Z]+$/.test(nextPart) || // DAIML, DCSE, etc.
                  /^S[A-Z]+$/.test(nextPart)) { // SCSE, SCAT, etc.
                  extractedTitle = `${orgParts[i]}, ${nextPart}`;
                }
              }

              return extractedTitle;
            }
          }
        }
      }
    }
  }

  // THIRD: If position has "professor", just use "Professor" (not the full string)
  if (position && position.trim() !== "") {
    const positionLower = position.toLowerCase();
    if (positionLower.includes("professor")) {
      // Return just "Professor" or "Associate Professor" etc., not the full string with institution
      if (positionLower.includes("associate professor")) {
        return "Associate Professor";
      } else if (positionLower.includes("assistant professor")) {
        return "Assistant Professor";
      } else {
        return "Professor";
      }
    }
  }

  // For people with Mr./Ms. prefix - use their position if they have one, otherwise return empty (they are not professors)
  const nameLower = name.toLowerCase();
  if (nameLower.startsWith("mr.") || nameLower.startsWith("ms.") ||
    nameLower.startsWith("shri") || nameLower.startsWith("smt.")) {
    // If they have a specific position, use that
    if (position && position.trim() !== "") {
      return position;
    }
    return "";
  }

  // Default to Professor if no meaningful title found
  return "Professor";
};

// Helper function to format affiliation - removes redundancy with title
const formatAffiliation = (organization, position, displayedTitle) => {
  if (!organization) return "";

  // Split the organization into parts
  const orgParts = organization.split(',').map(p => p.trim());

  // Get words/phrases from the displayed title (for comparison)
  const titleWords = displayedTitle ? displayedTitle.toLowerCase().split(/[,\s]+/).filter(w => w.length > 1) : [];

  // Filter out parts that are already in the title
  const filteredParts = orgParts.filter(part => {
    const partLower = part.toLowerCase();

    // Check if this part (or significant portion of it) appears in the title
    for (const titleWord of titleWords) {
      if (titleWord.length > 2 && partLower.includes(titleWord)) {
        return false; // Skip this part
      }
      if (partLower.length > 2 && displayedTitle.toLowerCase().includes(partLower)) {
        return false; // Skip this part
      }
    }

    // Also remove common title prefixes
    const titlesToRemove = [
      'professor', 'prof.', 'associate professor', 'assistant professor',
      'dean', 'associate dean', 'assistant dean',
      'director', 'associate director', 'assistant director',
      'hod', 'head of department'
    ];

    for (const title of titlesToRemove) {
      if (partLower.startsWith(title) || partLower === title) {
        return false;
      }
    }

    // Remove department codes if they're in the title
    const deptCodes = ['IQAC', 'SCSE', 'SCAT', 'DCSE', 'DAIML', 'DAIDS', 'DCYS', 'SAI', 'SOHT', 'SMCS', 'DOME', 'DOCE', 'DEECE', 'GSCALE', 'APR'];
    for (const code of deptCodes) {
      if (displayedTitle.toUpperCase().includes(code) && part.toUpperCase().includes(code)) {
        return false;
      }
    }

    return true;
  });

  return filteredParts.join(', ').trim();
};

export default function TeamPage() {
  const roles = {
    "Chief Patron": [
      "Shri Suneel Galgotia"
    ],
    "Patron": [
      "Dr. Dhruv Galgotia",
      "Ms. Aradhana Galgotia",
      "Dr. Ankush Mittal",
      "Prof. (Dr.) S.N.Singh"
    ],
    "Conference General Chair": [
      "Prof. (Dr.) Avadhesh Kumar",
      "Prof. (Dr.) Yogesh S. Chauhan"
    ],
    "Conference Chair": [
      "Prof. (Dr.) Aanjey M. Tripathi",
      "Prof. (Dr.) Kuldeep S. Kaswan"
    ],
    "Conference Organizing Chair": [
      "Prof. (Dr.) Harish Kumar GR",
      "Prof. (Dr.) Abdul Aleem",
      "Prof. (Dr.) Gaurav Agarwal",
      "Prof. Manish Kumar",
      "Prof. Arpesh Singh"
    ],
    "Conference Co-Organizing Chair": [
      "Prof. (Dr.) Sunil Bharti"
    ],
    "Technical Program Committee Chair": [
      "Prof. (Dr.) Vineeta Khemchandani",
      "Prof. (Dr.) Sudhir Kr. Singh",
      "Prof. (Dr.) Deepak Soni",
      "Prof. (Dr.) Sonia Setia"
    ],
    "Publication Chair": [
      "Prof. (Dr.) Shrddha Sagar"
    ],
    "Publicity Chair": [
      "Prof. (Dr.) Meenakshi Sharma",
      "Prof. (Dr.) Ravi Sharma"
    ],
    "Conference Secretary": [
      "Prof. (Dr.) Manish Raj",
      "Prof. (Dr.) Ajeet Singh",
      "Prof. (Dr.) Saurabh Singh",
      "Prof. (Dr.) K. K. Agrawal",
      "Prof. (Dr.) Shachi Mall",
      "Prof. Arunendra Mani Tripathi"
    ],
    "Event Organising Chair": [
      "Prof. (Dr.) Pooja Singh",
      "Prof. Pragya Tewari"
    ],
    "Conference Technical Co-Chair": [
      "Prof. (Dr.) Anupam Baliyan",
      "Prof. (Dr.) Trapti Shrivastava",
      "Prof. (Dr.) Shipra Shukla",
      "Prof. (Dr.) Jitendra"
    ],
    "Publication Co-Chair": [
      "Prof. (Dr.) Shashi Bhusan",
      "Prof. (Dr.) Vipin Rai"
    ],
    "International Advisory Chair": [
      "Prof. (Dr.) Anurag Dwivedi",
      "Prof. (Dr.) Jagjit Singh Dhatterwal"
    ],
    "National Advisory Chair": [
      "Prof. (Dr.) Geeta Sikka",
      "Prof. (Dr.) Abhishek Appaji",
      "Prof. (Dr.) Harivardhagini Subhadra"
    ],
    "Sponsorship & Industry Chair": [
      "Prof. (Dr.) Avneesh Kumar"
    ],
    "Finance Chair": [
      "Prof. (Dr.) Ashok K. Yadav"
    ],
    "Transport Chair": [
      "Prof. (Dr.) Ganesh Kumar",
      "Prof. (Dr.) Dinesh Kumar"
    ],
    "Website & Graphics Chair": [
      "Mr. Pankaj Lamba",
      "Mr. Gaurang Pant"
    ],
    "Media Chair": [
      "Prof. (Dr.) Neha Jindal"
    ],
    "Hospitality Chair": [
      "Prof. (Dr.) Shankar Kumar"
    ],
    "International Advisory Committee": [
      "Dr. Liudong Xing",
      "Dr. LING Tok Wang",
      "Dr. Norjihan Abdul Ghani",
      "Dr. Norbik Bashah Bin Idris",
      "Dr. Maizatul Akmar Ismail",
      "Dr. Suzan Jabbar Obaiys",
      "Dr. Mufti Mahmud",
      "Dr. Deepak K Jain",
      "Dr. Kishore Bingi",
      "Dr. Noor Zaman Jhanjhi",
      "Dr. CHAMAN VERMA",
      "Dr. Manoj Kumar",
      "Dr. Sachidanand Mohanty",
      "Dr. S.B.Goyal",
      "Dr. Nagender Aneja",
      "Dr. Pradeep Kumar",
      "Dr. Mukesh Prasad",
      "Dr. Gavendra Singh",
      "Dr. Hoang Pham",
      "Dr. Nitin Kumar Saxena",
      "Prof. Utkal Mehta",
      "Dr. Shafiq Ul Rehman",
      "Prof. Mohammad Rashid Hussain",
      "Prof. Deepak L. Waikar",
      "Chin Kuan Ho",
      "Dr. Sivaneasan Bala Krishnan",
      "Prof. Ts. Dr. Murali Raman",
      "Dr. Ahmed A. Elngar",
      "Dr. Hironori Washizaki",
      "Dr. Supavadee Aramvith"
    ],
    "National Advisory Committee": [
      "Prof. Adarsh Anand",
      "Prof. (Dr.) Chandra Prakash",
      "Prof. (Dr.) Sahil",
      "Prof. T. Poongodi",
      "Prof. Mayank Pandey",
      "Prof. Y. K. Prajapati",
      "Prof. Ela Kumar",
      "Prof. R.K. Nagaria",
      "Prof. Arvind Pandey",
      "Prof. Shashank Srivastava",
      "Dr. Dushyant Kumar Singh",
      "Prof. Nidhi Goel",
      "Prof. S. K. Srivastava",
      "Prof. (Dr.) Vimal Kumar",
      "Prof. Vandana Niranjan",
      "Prof. SRN Reddy",
      "Prof. Bhawna Narwal",
      "Dr. Vimal Kumar Singh Yadav",
      "Prof. Karuna Kadian",
      "Dr. Satish Chandra",
      "Prof. Anil Kumar Sagar",
      "Professor T. G. Sitharam",
      "Dr. Sri Niwas Singh",
      "Dr. J. Ramkumar",
      "Dr. Rajeev Kumar Singh",
      "Dr. Varun Kakar",
      "Dr. Mohammad Rihan",
      "Dr Bijaya Ketan Panigrahi",
      "Dr. Brij B. Gupta",
      "Dr. Vinay Kumar",
      "Dr. Savita Yadav",
      "Prof. Anurag Diwedi",
      "Prof. Deependra Rastogi",
      "Prof. N.Gayathri",
      "Prof. S.Rakesh Kumar",
      "Prof. Anoop Kumar Patel",
      "Prof. R.P. Yadav",
      "Prof. (Dr.) S Srinivasan",
      "Dr. V.D.S. Baghela",
      "Dr. P.S. Yadav",
      "Dr. Shailesh Kumar",
      "Dr. Swapnita Srivastava",
      "Dr. Vipul Narayan",
      "Dr. Arvind Kumar",
      "Prof. V. Krishna Rao Kandanvli",
      "Prof. P. Karuppanan",
      "Dr. Dharmendra Dixit",
      "Dr. Deepak Punetha",
      "Dr. Arun Kumar Saurabh",
      "Prof. Navdeep Singh",
      "Dr. Nirmal Ch Roy",
      "Prof. Priya Matta",
      "Prof. Alok Katiyar",
      "Prof. Dilip Yadav",
      "Prof. SPS Chauhan",
      "Prof. Vandana Sharma",
      "Dr. Rajeev Srivastava",
      "Prof. Asheesh Kumar Singh",
      "Dr. Anil Kumar Tripathi",
      "Dr. Prabhakar Tiwari",
      "Dr. Rakesh Kumar",
      "Prof. (Dr.) Meenakshi Awasthi"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-[url('/bg-pattern.svg')]">
      {/* Hero Section for Team Page */}
      <div className="relative py-20 bg-gradient-to-br from-[#4E0000] to-[#BE2727] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F96604] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#024CAD] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Our Distinguished Team
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
            The visionary leaders and dedicated professionals driving ICCSAI 2026 forward.
          </p>
          <div className="w-24 h-1 bg-[#F8C907] mx-auto mt-8 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {Object.entries(roles).map(([role, names], roleIndex) => (
          <div key={role} className="mb-20 last:mb-0">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">{role}</h2>
              <div className="flex items-center gap-2">
                <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-[#BE2727]"></div>
                <div className="w-2 h-2 bg-[#F8C907] rotate-45"></div>
                <div className="w-10 h-0.5 bg-gradient-to-l from-transparent to-[#BE2727]"></div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {names.map((name, index) => {
                const chair = cards.find((chair) => chair.name === name);
                return (
                  chair && (
                    <div
                      key={name}
                      className="group relative bg-white rounded-2xl p-6 w-full max-w-[300px] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                    >
                      {/* Top accent gradient */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#BE2727] to-[#F96604]"></div>

                      {/* Hover background effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#BE2727]/5 to-[#F96604]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Image */}
                      <div className="relative mb-6">
                        <div className="w-36 h-36 mx-auto rounded-full p-1 bg-gradient-to-br from-[#BE2727] to-[#F96604] shadow-md group-hover:scale-105 transition-transform duration-300">
                          <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden">
                            {chair.imgSrc ? (
                              <img
                                src={chair.imgSrc}
                                alt={name}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <img
                                src='/reshot-icon-user-ZXFJAEQURK.svg'
                                alt={name}
                                className="w-full h-full p-4 rounded-full object-contain opacity-50"
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#BE2727] transition-colors duration-200 mb-2">
                          {name}
                        </h3>

                        {(() => {
                          const title = formatTitle(chair.position, chair.organization, name);
                          const affiliation = formatAffiliation(chair.organization, chair.position, title);
                          return (
                            <>
                              {title && (
                                <p className="text-sm font-bold text-[#024CAD] uppercase tracking-wide mb-2 line-clamp-2 min-h-[1.25rem]">
                                  {title}
                                </p>
                              )}
                              {affiliation && (
                                <p className="text-sm text-gray-600 font-medium leading-snug line-clamp-3">
                                  {affiliation}
                                </p>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
