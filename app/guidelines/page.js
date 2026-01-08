import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 bg-[url('/bg-pattern.svg')] py-12 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <div className="inline-block px-4 py-1.5 bg-red-100 text-[#BE2727] rounded-full text-sm font-semibold mb-4 border border-red-200">
          For Authors
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#BE2727] to-[#F96604] bg-clip-text text-transparent mb-6 tracking-tight">
          Author's Guidelines
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#BE2727] to-[#F96604] mx-auto rounded-full mb-8"></div>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          We invite authors to submit original, high-quality research. Submissions must be unpublished and not under review elsewhere. All manuscripts should be submitted via Microsoft CMT in strict adherence to the IEEE standard template.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout for Core Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Paper Formatting Guidelines Card */}
          <div className="relative group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
            {/* Decorative top gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-[#BE2727] to-[#F96604]"></div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#BE2727]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Formatting Rules</h2>
              </div>

              <ul className="space-y-4">
                {[
                  "Paper Size: US Letter (8.5\" × 11\")",
                  "Length: Max 6 pages (incl. figures/refs)",
                  "Extra Pages: Up to 2 allowed with fee",
                  "Layout: Double-column, single-spaced",
                  "Font: 10pt Times New Roman",
                  "File Format: PDF (Max 5MB)",
                  "No page numbering in manuscript"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F96604] flex-shrink-0"></span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#BE2727] to-[#F96604] text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download IEEE Template
                </a>
              </div>
            </div>
          </div>

          {/* General Instructions Card */}
          <div className="relative group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
            {/* Decorative top gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-[#024CAD] to-[#0CC1E0]"></div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#024CAD]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">General Instructions</h2>
              </div>

              <ul className="space-y-3">
                {[
                  "Papers violating formatting guidelines may be rejected.",
                  "Submissions must be original and unpublished.",
                  "Simultaneous submissions prohibited.",
                  "Official language: English.",
                  "Strict adherence to IEEE two-column format.",
                  "All visual elements must fit within page limits.",
                  "Review based on originality, quality, and clarity.",
                  "Submission exclusively via Microsoft CMT."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-[#0CC1E0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-800 flex gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  The Technical Program Committee reserves the right to accept or reject papers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Policies Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Plagiarism Policy */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-start hover:border-red-100 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Plagiarism Policy</h3>
            <p className="text-gray-600 mb-6 flex-grow">Review IEEE's strict guidelines regarding similarity and plagiarism to ensure academic integrity.</p>
            <a
              href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BE2727] font-semibold hover:text-[#F96604] flex items-center transition-colors"
            >
              Read Policy <span className="ml-2">→</span>
            </a>
          </div>

          {/* Copyright Policy */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-start hover:border-red-100 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">E-Copyright Process</h3>
            <p className="text-gray-600 mb-6 flex-grow">Understand the copyright transfer process for final camera-ready submissions to IEEE Xplore.</p>
            <a
              href="https://www.ieee.org/publications/rights/copyright-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BE2727] font-semibold hover:text-[#F96604] flex items-center transition-colors"
            >
              View Document <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#F8C907] rounded-full"></span>
              Important Submission Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-300">
              <p>• Papers must necessarily be presented by at least one author.</p>
              <p>• Registration is mandatory for final paper upload.</p>
              <p>• No-show papers will be excluded from proceedings (No refund).</p>
              <p>• Substitutions are allowed prior to the even date.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
