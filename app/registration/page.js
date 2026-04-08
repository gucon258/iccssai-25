import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const RegistrationPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1f3c88] mb-4">Registration Rates</h1>
        </div>
        
        <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center whitespace-nowrap">
              <thead>
                <tr className="bg-[#1f3c88] text-white font-semibold tracking-wide text-sm md:text-base">
                  <th className="p-4 border-r border-[#3d5a9d]">Presentation Mode</th>
                  <th className="p-4 border-r border-[#3d5a9d]">Registration Type</th>
                  <th className="p-4 border-r border-[#3d5a9d]">Country</th>
                  <th className="p-4 border-r border-[#3d5a9d]">IEEE Member</th>
                  <th className="p-4">Non-IEEE Member</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {/* ONLINE ROWS */}
                <tr className="bg-[#e9f2fb] text-[#1f3c88]">
                  <td className="p-4 border border-[#c4d9f1] font-bold text-base" rowSpan="3">ONLINE</td>
                  <td className="p-4 border border-[#c4d9f1]">Regular/Industry</td>
                  <td className="p-4 border border-[#c4d9f1] text-[#6b89b5]">Indian / Foreigner</td>
                  <td className="p-4 border border-[#c4d9f1]">₹10,000 / 350 USD</td>
                  <td className="p-4 border border-[#c4d9f1]">₹12,000 / 400 USD</td>
                </tr>
                <tr className="bg-[#e9f2fb] text-[#1f3c88]">
                  <td className="p-4 border border-[#c4d9f1]">Student Author</td>
                  <td className="p-4 border border-[#c4d9f1] text-[#6b89b5]">Indian / Foreigner</td>
                  <td className="p-4 border border-[#c4d9f1]">₹8,500 / 200 USD</td>
                  <td className="p-4 border border-[#c4d9f1]">₹9,500 / 300 USD</td>
                </tr>
                <tr className="bg-[#e9f2fb] text-[#1f3c88]">
                  <td className="p-4 border border-[#c4d9f1]">Attendee</td>
                  <td className="p-4 border border-[#c4d9f1] text-[#6b89b5]">Indian / Foreigner</td>
                  <td className="p-4 border border-[#c4d9f1]">₹2,500 / 100 USD</td>
                  <td className="p-4 border border-[#c4d9f1]">₹3,500 / 150 USD</td>
                </tr>

                {/* OFFLINE ROWS */}
                <tr className="bg-[#e6f9ed] text-[#1b7f43]">
                  <td className="p-4 border border-[#b8ebd0] font-bold text-base" rowSpan="3">OFFLINE</td>
                  <td className="p-4 border border-[#b8ebd0]">Regular/Industry</td>
                  <td className="p-4 border border-[#b8ebd0] text-[#5caa7f]">Indian / Foreigner</td>
                  <td className="p-4 border border-[#b8ebd0]">₹8,500 / 250 USD</td>
                  <td className="p-4 border border-[#b8ebd0]">₹10,500 / 500 USD</td>
                </tr>
                <tr className="bg-[#e6f9ed] text-[#1b7f43]">
                  <td className="p-4 border border-[#b8ebd0]">Student Author</td>
                  <td className="p-4 border border-[#b8ebd0] text-[#5caa7f]">Indian / Foreigner</td>
                  <td className="p-4 border border-[#b8ebd0]">₹7,000 / 200 USD</td>
                  <td className="p-4 border border-[#b8ebd0]">₹8,000 / 250 USD</td>
                </tr>
                <tr className="bg-[#e6f9ed] text-[#1b7f43]">
                  <td className="p-4 border border-[#b8ebd0]">Attendee</td>
                  <td className="p-4 border border-[#b8ebd0] text-[#5caa7f]">Indian / Foreigner</td>
                  <td className="p-4 border border-[#b8ebd0]">₹1,500 / 100 USD</td>
                  <td className="p-4 border border-[#b8ebd0]">₹2,000 / 150 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-6 text-center text-sm bg-white border-t border-gray-200">
            <p className="text-red-500 mb-2 italic">* All rates are inclusive of GST 18%</p>
            <p className="font-bold text-[#1f3c88] mb-2 text-base">One full author registration can register up to 2 papers</p>
            <p className="text-red-500 max-w-4xl mx-auto leading-relaxed">
              * Each accepted paper is allowed a maximum of 6 pages in the final manuscript. Authors may include up to 2 additional pages beyond the basic 6 pages, if required. An extra page charge will apply at the time of author registration: INR 1000 per additional page for Indian authors and USD 15 per additional page for international authors.
            </p>
          </div>
        </div>

        {/* Account Details Box */}
        <div className="mt-12 w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1f3c88] mb-6 text-center border-b pb-4">Account Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 uppercase tracking-widest">Name of Account</span>
                    <span className="font-semibold text-lg">GU Conferences</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 uppercase tracking-widest">Account Number</span>
                    <span className="font-semibold text-lg">6717000100025845</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 uppercase tracking-widest">Bank Name</span>
                    <span className="font-semibold text-lg">Punjab National Bank, Noida</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 uppercase tracking-widest">IFSC Code</span>
                    <span className="font-semibold text-lg">PUNB0671700</span>
                </div>
                <div className="flex flex-col sm:col-span-2">
                    <span className="text-sm text-gray-500 uppercase tracking-widest">SWIFT Code</span>
                    <span className="font-semibold text-lg">PUNBINBBMSN</span>
                </div>
            </div>
            
            <div className="mt-8 flex justify-center">
                <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025" target="_blank" rel="noreferrer">
                    <button className="bg-gradient-to-r from-[#1f3c88] to-[#152e6d] hover:shadow-xl hover:-translate-y-1 transform text-white font-semibold text-lg rounded-full px-8 py-3 transition-all duration-300 w-full sm:w-auto">
                        Submit your paper
                    </button>
                </a>
            </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default RegistrationPage
