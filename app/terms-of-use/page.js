import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use | ICCSAI 2026',
  description: 'Terms of Use for the 2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence (ICCSAI-2026).',
};

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50 bg-[url('/bg-pattern.svg')] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <div className="inline-block px-4 py-1.5 bg-red-100 text-[#BE2727] rounded-full text-sm font-semibold mb-4 border border-red-200">
          Legal Information
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#BE2727] to-[#F96604] bg-clip-text text-transparent mb-4 tracking-tight">
          Terms of Use
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#BE2727] to-[#F96604] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 text-base md:text-lg">
          Last updated: September 2026 • ICCSAI-2026 | Galgotias University
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using the official website of the 2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence (ICCSAI-2026), you agree to comply with and be bound by these Terms of Use and all applicable guidelines and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            2. Intellectual Property & Author Rights
          </h2>
          <div className="space-y-3 text-gray-600">
            <p>All materials published on this website (logos, conference graphics, text, and structure) are protected by copyright and intellectual property laws.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Submitted papers must be original, unpublished, and adhere strictly to IEEE publication ethics.</li>
              <li>Authors of accepted papers will be required to sign and transfer the IEEE Copyright Form prior to publication.</li>
              <li>Plagiarism and simultaneous submissions to other venues are strictly prohibited.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            3. Registration & Presentation Policy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
            <li>At least one author of each accepted paper must register at the applicable author rate to ensure inclusion in the conference proceedings.</li>
            <li>Accepted papers must be presented during the scheduled technical sessions (Physical with max 20% online option as per conference guidelines).</li>
            <li>Non-presented papers (No-Show) will not be forwarded for inclusion in the IEEE Xplore Digital Library.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            4. Cancellation & Refund Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Registration fees once paid are non-refundable and non-transferable under normal circumstances. In case of duplicate payments or transaction errors, contact the conference organizing team with valid payment proof.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            5. Disclaimers & Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The conference organizing committee and Galgotias University make every effort to maintain accurate and up-to-date information. However, schedule adjustments, track changes, or speaker substitutions may occur when necessary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            6. Inquiries & Contact
          </h2>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100 text-gray-700">
            <p className="font-semibold text-[#BE2727]">ICCSAI-2026 Organizing Secretariat</p>
            <p>Galgotias University, Greater Noida, Uttar Pradesh 203201, India</p>
            <p>Email: <a href="mailto:iccsai@galgotiasuniversity.edu.in" className="text-[#BE2727] underline">iccsai@galgotiasuniversity.edu.in</a></p>
          </div>
        </section>

        <div className="pt-6 border-t border-gray-100 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#BE2727] to-[#F96604] text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
