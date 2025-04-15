import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-gray-100 to-gray-200 leading-relaxed antialiased min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <section className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="px-6 py-8 md:px-10 md:py-12">
            <h1 className="text-3xl font-bold text-indigo-700 tracking-tight mb-8 text-center">
              <span role="img" aria-label="shield">🛡️</span> Your Privacy Matters
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At our resume builder, we deeply value your trust and are committed to safeguarding your
              personal information. This Privacy Policy is designed to be clear, concise, and easy to understand,
              explaining how we collect, use, and protect your data when you use our resume builder services.
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="user">👤</span>
                1. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information you directly provide, such as your name, email address, professional
                history, education details, skills, and any other information you choose to include in your resume
                and cover letters. Additionally, we may gather data on how you interact with our platform, including
                template selections and content creation patterns, to enhance your user experience.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="settings">⚙️</span>
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information we collect serves several key purposes, all aimed at providing you with the best
                possible resume building experience:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
                <li className="mb-2">To expertly generate and format your professional resumes and cover letters.</li>
                <li className="mb-2">To offer you a diverse range of modern and effective template options.</li>
                <li className="mb-2">To securely store your work, allowing seamless access and future editing.</li>
                <li className="mb-2">To promptly respond to your inquiries and provide comprehensive customer support.</li>
                <li className="mb-2">To analyze platform usage, enabling us to continuously improve our services and features.</li>
                <li>To keep you informed about relevant updates, valuable tips, and special offers (with your consent).</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="lock">🔒</span>
                3. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We firmly believe in protecting your privacy and do not engage in selling your personal information
                to third parties. We may collaborate with trusted service providers who assist us in delivering our
                services, under strict confidentiality agreements. In certain limited circumstances, we may be legally
                obligated to disclose your information to comply with the law or protect our rights and safety.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="info">ℹ️</span>
                4. Data Security Measures
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement robust security protocols, including advanced encryption and secure storage solutions,
                to protect your personal information from unauthorized access, use, or disclosure. We regularly
                assess and update our security practices to maintain the highest standards of data protection.
                However, please understand that no online platform can guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="user">👤</span>
                5. Your Rights and Choices
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have full control over your personal information. You can access, modify, or delete your data
                directly through your account settings. You also have the option to unsubscribe from our promotional
                emails at any time by following the instructions provided in those emails.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="warning">⚠️</span>
                6. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are intended for users aged 13 and older. We do not knowingly collect personal
                information from children under this age. If you are a parent or guardian and believe your child has
                provided us with personal information, please contact us immediately, and we will take swift action
                to remove that information from our systems.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="settings">⚙️</span>
                7. Updates to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal
                requirements. We will notify you of any significant revisions by prominently posting the updated
                policy on our website or by sending you a direct email notification. Your continued use of our
                services after the effective date of any changes signifies your acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="envelope">✉️</span>
                8. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling
                practices, please do not hesitate to contact us at:
                <a href="mailto:privacy@resumebuilder.com" className="text-indigo-500 hover:underline ml-1">
                  privacy@resumebuilder.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;