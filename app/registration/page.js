import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const RegistrationPage = () => {
  return (
    <div className="bg-gray-50 bg-[url('/bg-pattern.svg')] min-h-screen py-16 px-4">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-red-100 text-[#BE2727] rounded-full text-sm font-semibold mb-4 border border-red-200">
            Tickets & Passes
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#BE2727] to-[#F96604] bg-clip-text text-transparent mb-6 tracking-tight">
            Registration Rates
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#BE2727] to-[#F96604] mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center whitespace-nowrap">
              <thead>
                <tr className="bg-gradient-to-r from-[#BE2727] to-[#F96604] text-white font-semibold tracking-wide text-sm md:text-base">
                  <th className="p-4 border-r border-white/20 font-bold uppercase tracking-wider">Presentation Mode</th>
                  <th className="p-4 border-r border-white/20 font-bold uppercase tracking-wider">Registration Type</th>
                  <th className="p-4 border-r border-white/20 font-bold uppercase tracking-wider">Country</th>
                  <th className="p-4 border-r border-white/20 font-bold uppercase tracking-wider">IEEE Member</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Non-IEEE Member</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {/* ONLINE ROWS */}
                <tr className="bg-white text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-r border-gray-100 font-bold text-base text-[#BE2727] bg-red-50/50" rowSpan="3">ONLINE</td>
                  <td className="p-4 border-r border-gray-100 font-semibold text-gray-700">Regular/Industry</td>
                  <td className="p-4 border-r border-gray-100 text-gray-500">Indian / Foreigner</td>
                  <td className="p-4 border-r border-gray-100 font-medium">₹11,000 / 350 USD</td>
                  <td className="p-4 font-medium">₹12,000 / 400 USD</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-r border-gray-100 font-semibold text-gray-700">Student Author</td>
                  <td className="p-4 border-r border-gray-100 text-gray-500">Indian / Foreigner</td>
                  <td className="p-4 border-r border-gray-100 font-medium">₹8,500 / 250 USD</td>
                  <td className="p-4 font-medium">₹9,500 / 300 USD</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-r border-gray-100 font-semibold text-gray-700">Attendee</td>
                  <td className="p-4 border-r border-gray-100 text-gray-500">Indian / Foreigner</td>
                  <td className="p-4 border-r border-gray-100 font-medium">₹2,500 / 100 USD</td>
                  <td className="p-4 font-medium">₹3,500 / 150 USD</td>
                </tr>

                {/* OFFLINE ROWS */}
                <tr className="bg-orange-50/30 text-gray-800 border-b border-gray-100 hover:bg-orange-50/50 transition-colors">
                  <td className="p-4 border-r border-gray-100 font-bold text-base text-[#F96604] bg-orange-100/50" rowSpan="3">OFFLINE</td>
                  <td className="p-4 border-r border-gray-100 font-semibold text-gray-700">Regular/Industry</td>
                  <td className="p-4 border-r border-gray-100 text-gray-500">Indian / Foreigner</td>
                  <td className="p-4 border-r border-gray-100 font-medium">₹9,500 / 250 USD</td>
                  <td className="p-4 font-medium">₹10,500 / 300 USD</td>
                </tr>
                <tr className="bg-orange-50/30 text-gray-800 border-b border-gray-100 hover:bg-orange-50/50 transition-colors">
                  <td className="p-4 border-r border-gray-100 font-semibold text-gray-700">Student Author</td>
                  <td className="p-4 border-r border-gray-100 text-gray-500">Indian / Foreigner</td>
                  <td className="p-4 border-r border-gray-100 font-medium">₹7,000 / 200 USD</td>
                  <td className="p-4 font-medium">₹8,000 / 250 USD</td>
                </tr>
                <tr className="bg-orange-50/30 text-gray-800 hover:bg-orange-50/50 transition-colors">
                  <td className="p-4 border-r border-gray-100 font-semibold text-gray-700">Attendee</td>
                  <td className="p-4 border-r border-gray-100 text-gray-500">Indian / Foreigner</td>
                  <td className="p-4 border-r border-gray-100 font-medium">₹1,500 / 100 USD</td>
                  <td className="p-4 font-medium">₹2,000 / 150 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-8 text-center text-sm bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
            <p className="text-[#BE2727] font-medium mb-3 italic inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              All rates are inclusive of GST 18%
            </p>
            <p className="font-bold text-gray-800 mb-3 text-base flex justify-center items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F96604]"></span>
              One full author registration can register up to 2 papers
              <span className="w-1.5 h-1.5 rounded-full bg-[#F96604]"></span>
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4 bg-red-50/50 p-4 rounded-xl border border-red-100/50 text-justify">
              <span className="font-semibold text-gray-800">Extra Page Charges:</span> Each accepted paper is allowed a maximum of 6 pages in the final manuscript. Authors may include up to 2 additional pages beyond the basic 6 pages, if required. An extra page charge will apply at the time of author registration: <span className="font-semibold text-[#BE2727]">INR 1500 per additional page for Indian authors</span> and <span className="font-semibold text-[#BE2727]">USD 20 per additional page for international authors</span>.
            </p>
          </div>
        </div>

        {/* Account Details Box */}
        <div className="mt-12 w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#BE2727]/10 to-[#F96604]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-[#F96604]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              Payment Account Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 text-gray-700 relative z-10 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Name of Account</span>
                    <span className="font-bold text-gray-900 text-lg">GU Conferences</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Account Number</span>
                    <span className="font-mono font-bold text-[#BE2727] text-lg bg-red-50 px-3 py-1 rounded inline-block w-max">6717000100025845</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Bank Name</span>
                    <span className="font-bold text-gray-900">Punjab National Bank, Noida</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">IFSC Code</span>
                    <span className="font-mono font-bold text-gray-900">PUNB0671700</span>
                </div>
                <div className="flex flex-col md:col-span-2 items-center text-center mt-2 pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">SWIFT Code</span>
                    <span className="font-mono font-bold text-gray-900 bg-white px-4 py-1.5 rounded-lg border border-gray-200 shadow-sm inline-flex">PUNBINBBMSN</span>
                </div>
            </div>
            
            <div className="mt-10 flex justify-center relative z-10">
                <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2026%2F" target="_blank" rel="noreferrer">
                    <button className="bg-gradient-to-r from-[#BE2727] to-[#F96604] hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 transform text-white font-semibold text-lg rounded-xl px-10 py-4 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group">
                        Submit your paper
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                </a>
            </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default RegistrationPage
