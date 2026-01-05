'use client';

import React, { useState } from "react";

const ConferenceSchedule = () => {
  const [activeDay, setActiveDay] = useState("day2"); // Default to day 2 (Inauguration Day)

  // Day 1 Schedule - April 4, 2025 (Online Sessions)
  const day1Schedule = [
    { no: 1, event: "Online Technical Session Slot-1 (Technical session 1 to Technical Session 13)", time: "9:30 AM to 12:30 PM" },
    { no: "", event: "High Tea", time: "10:00 AM - 10:30 AM", highlight: true },
    { no: 2, event: "Keynote Address by - Dr Sivaneasan Bala Krishnan - Deputy Director, SIT Teaching and Learning Academy, Associate Professor, Singapore Institute of Technology, Singapore (AI 307)", time: "12:30 PM to 1:00 PM" },
    { no: "", event: "Lunch", time: "01:05 PM - 01:35 PM", highlight: true },
    { no: 3, event: "Online Technical Session Slot-2 (Technical session 14 to Technical Session 27)", time: "1:00 PM to 4:00 PM" }
  ];

  // Day 2 Schedule - April 5, 2025 (Inauguration Day)
  const day2Schedule = [
    { no: "", event: "Registration, Kit Distribution & Technical Session: 09:00 A.M. onwards in AI - Block", time: "", highlight: true },
    { no: 1, event: "Offline Technical Session Slot-1 (Technical session 1 to Technical Session 8)", time: "9:00 AM to 12:30 PM" },
    { no: 2, event: "Offline Technical Session Slot-2 (Technical session 9 to Technical Session 12)", time: "12:00 PM to 3:30 PM" },
    { no: 3, event: "Visit, Observation & Examination of Events conducted by Galgotias University IEEE Student Chapter and IAS Society", time: "9:30 AM" },
    { no: 4, event: "Visit, Observation of Offline Technical Session", time: "9:50 AM" },
    { no: 5, event: "Visit, Observation & Examination of Events conducted by Galgotias University IEEE Student Chapter and CS Society", time: "10:10 AM" },
    { no: 6, event: "Visit, Observation & Examination of Events conducted by Galgotias University IEEE Student Chapter and WIE Affinity group", time: "10:25 AM" },
    { no: "", event: "High Tea", time: "10:00 AM - 10:30 AM", highlight: true },
    { no: "", event: "Reach Inauguration venue", time: "10:50 AM", highlight: true },
    { no: 7, event: "Introduction", time: "11:00 AM" },
    { no: 8, event: "Lamp lighting - Maa Saraswati Vandana", time: "11:05 AM" },
    { no: 9, event: "Inviting Dignitaries onto the Dais", time: "11:10 AM" },
    { no: 10, event: "Bouquet Presentation to Dignitaries", time: "11:15 AM" },
    { no: 11, event: "Welcome Address by - Dr. Nitin Gaur, Registrar, GU", time: "11:20 AM" },
    { no: 12, event: "Conference Theme by - Prof. (Dr.) Avadhesh Kumar, PVC, GU, Greater Noida, Conference Chair- ICCSAI 2025", time: "11:30 AM" },
    { no: 13, event: "Address by – Hon'ble CEO- Dr. Dhruv Galgotia, Galgotias University, India", time: "11:35 AM" },
    { no: 14, event: "Address by - Dr. Mohammad Rihan, Chair Elect, IEEE UP Section, Director, NISE, Gurugram", time: "11:45 AM" },
    { no: 15, event: "Address by - Prof. (Dr.) B. K. Panigrahi, (IEEE Fellow) Professor, EE Department, IIT Delhi, India", time: "11:55 AM" },
    { no: 16, event: "Address by - Prof. (Dr.) Akshay Kumar Rathore (IEEE Fellow), Professor (Engineering) and Program Leader (Electrical Power Engineering), Singapore Institute of Technology, Singapore", time: "12:05 PM" },
    { no: 17, event: "Address by - Prof. (Dr.) S.N. Singh, (IEEE Fellow) Director, IIITM Gwalior", time: "12:15 PM" },
    { no: 18, event: "Release of Conference Souvenir", time: "12:20 PM" },
    { no: 19, event: "Address by - Prof. (Dr.). Rajeev Srivastava, Director, IIIT Ranchi, India", time: "12:30 PM" },
    { no: 20, event: "Address by - Prof. (Dr.). Harivardhagini Subhadra, 2025 IEEE WIE COMMITTEE", time: "12:35 PM" },
    { no: 21, event: "Address by - Prof. (Dr.) J. Ramkumar, Dean (Planning), IIT Kanpur, India", time: "12:40 PM" },
    { no: 22, event: "Presidential Address by- Prof. (Dr.) K. M. Babu, Vice Chancellor GU, Greater Noida", time: "12:45 PM" },
    { no: 23, event: "Token of Honour to Dignitaries (Memento Presentation)", time: "12:50 PM" },
    { no: 24, event: "Vote of Thanks", time: "12:55 PM" },
    { no: 25, event: "National Anthem", time: "-" },
    { no: "", event: "Lunch", time: "01:05 PM - 01:35 PM", highlight: true },
    { no: 26, event: "Keynote Address by- Prof. (Dr.) Akshay Kumar Rathore, Professor (Engineering) and Program Leader (Electrical Power Engineering). (AI 307)", time: "01:40 PM" },
    { no: 27, event: "Keynote Address by- Prof. (Dr.) Bijaya Ketan Panigrahi, Professor (Electrical Engineering), IIT Delhi. (AI 307)", time: "02:10 PM" },
    { no: 28, event: "Keynote Address by - Prof. (Dr.) Anil Kumar Tripathi, Professor, CSE, ITT BHU (AI 307)", time: "02:40 PM" },
    { no: 29, event: "Keynote Address & WIE Kit distribution by - Prof. (Dr.). Harivardhagini Subhadra, 2025 IEEE WIE COMMITTEE (AI-307)", time: "03:10 PM" },
    { no: "", event: "High Tea", time: "03:30 PM - 04:00 PM", highlight: true },
    { no: "", event: "Cultural Evening", time: "06:00 PM onwards", highlight: true }
  ];

  // Day 3 Schedule - April 6, 2025 (Valedictory Day)
  const day3Schedule = [
    { no: 1, event: "Keynote Address by Prof. (Dr.) Rajeev Kumar Singh, Professor, Department of Electrical Engineering IIT(BHU) (AI-307)", time: "10:30 AM" },
    { no: "", event: "High Tea", time: "11:00 AM - 11:30 AM", highlight: true },
    { no: 2, event: "Keynote Address by - Prof. Dr. Hironori Washizaki-IEEE Computer Society 2025 President (AI-307)", time: "11:30 AM" },
    { no: 3, event: "Facilitation & Certificate Distribution", time: "12:05 PM" },
    { no: 4, event: "Conference Conclusion & Vote of Thanks", time: "12:30 PM" },
    { no: 5, event: "National Anthem", time: "-" },
    { no: "", event: "Lunch", time: "01:30 PM - 02:30 PM", highlight: true }
  ];

  const renderSchedule = () => {
    let scheduleData;
    let dayTitle;
    let dayDate;

    if (activeDay === "day1") {
      scheduleData = day1Schedule;
      dayTitle = "Day-1 (Online Sessions)";
      dayDate = "04 April 2025";
    } else if (activeDay === "day2") {
      scheduleData = day2Schedule;
      dayTitle = "Day-2 (Inauguration Day)";
      dayDate = "05 April 2025";
    } else {
      scheduleData = day3Schedule;
      dayTitle = "Day-3 (Valedictory Day)";
      dayDate = "06 April 2025";
    }

    return (
      <>
        <div className="text-center">
          <h3 className="text-lg font-bold text-blue-700 underline mt-3">{dayTitle}</h3>
          <p className="text-md font-semibold text-gray-600">{dayDate}</p>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">S. No.</th>
                <th className="border border-gray-300 px-4 py-2">Particulars</th>
                <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Time</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => (
                <tr key={index} className={`${item.highlight ? "bg-yellow-100 font-semibold" : index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.no}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.event}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center whitespace-nowrap">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence</h2>
        <h3 className="text-xl font-bold text-blue-600">(ICCSAI - 2026)</h3>
        <p className="text-md font-semibold text-gray-700 mt-2">Conference Record #64074</p>
        <p className="text-md font-semibold text-red-600">Venue: Galgotias University, Greater Noida, U.P., India</p>
        <p className="text-sm font-medium text-gray-500 mt-2 italic">All timings are in IST (GMT+5:30)</p>
      </div>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveDay("day1")}
          className={`px-4 py-2 rounded-md ${activeDay === "day1" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Day 1 (Apr 4)
        </button>
        <button
          onClick={() => setActiveDay("day2")}
          className={`px-4 py-2 rounded-md ${activeDay === "day2" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Day 2 (Apr 5)
        </button>
        <button
          onClick={() => setActiveDay("day3")}
          className={`px-4 py-2 rounded-md ${activeDay === "day3" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Day 3 (Apr 6)
        </button>
      </div>

      {renderSchedule()}
    </div>
  );
};

export default ConferenceSchedule;
