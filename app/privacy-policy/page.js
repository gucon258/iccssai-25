import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | ICCSAI 2026',
  description: 'Privacy Policy for the 2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence (ICCSAI-2026).',
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 bg-[url('/bg-pattern.svg')] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <div className="inline-block px-4 py-1.5 bg-red-100 text-[#BE2727] rounded-full text-sm font-semibold mb-4 border border-red-200">
          Legal Information
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#BE2727] to-[#F96604] bg-clip-text text-transparent mb-4 tracking-tight">
          Privacy Policy
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
            1. Overview & Scope
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The 2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence (ICCSAI-2026), hosted by Galgotias University, is committed to safeguarding the privacy of our conference attendees, authors, reviewers, committee members, and website visitors. This Privacy Policy details how we collect, use, and protect your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            2. Information We Collect
          </h2>
          <div className="space-y-3 text-gray-600">
            <p>We may collect personal details when you interact with our website, submit a manuscript, or register for the conference, including:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Personal Identification:</strong> Name, affiliation, designation, academic title, and email address.</li>
              <li><strong>Paper Submissions:</strong> Author details, manuscript files, abstracts, and reviewer communications via Microsoft CMT.</li>
              <li><strong>Registration & Payment Records:</strong> Registration categories, payment transaction references, and presentation modes (physical/online).</li>
              <li><strong>Technical Data:</strong> Browser type, device details, and anonymous access logs for website performance and security.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
            <li>To manage and coordinate peer-review and paper acceptance for ICCSAI-2026.</li>
            <li>To facilitate conference registration, attendance verification, and certificate issuance.</li>
            <li>To communicate crucial updates, acceptance notifications, schedules, and presentation guidelines.</li>
            <li>To submit accepted and presented papers to IEEE Xplore Digital Library as per publication protocols.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            4. Data Sharing & Disclosure
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell, rent, or trade your personal data. Your information is shared only with authorized partners strictly necessary for conference operations, such as IEEE (for publication and indexing) and Microsoft CMT (for peer-review workflow).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            5. Data Security
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We employ industry-standard technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
            6. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions or concerns regarding this Privacy Policy, please contact the conference secretariat:
          </p>
          <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100 text-gray-700">
            <p className="font-semibold text-[#BE2727]">ICCSAI-2026 Organizing Committee</p>
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

export default PrivacyPolicy;
