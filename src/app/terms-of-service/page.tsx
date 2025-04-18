import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-gray-100 to-gray-200 leading-relaxed antialiased min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <section className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="px-6 py-8 md:px-10 md:py-12">
            <h1 className="text-3xl font-bold text-indigo-700 tracking-tight mb-8 text-center">
              <span role="img" aria-label="agreement">📜</span> Terms of Service
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to Resume Builder! These Terms of Service govern your use of our website and
              services. By accessing or using our platform, you agree to be bound by these terms. Please read them
              carefully.
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="user">👤</span>
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by
                these Terms of Service, as well as our Privacy Policy. If you do not agree to these terms, please
                do not use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="service">🛠️</span>
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Resume Builder provides an online platform that allows users to create professional
                resumes and cover letters using various templates, tools, and features, including AI-powered content
                enhancement.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="account">🔑</span>
                3. User Accounts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of our service, you may be required to create an account. You are
                responsible for maintaining the confidentiality of your account credentials and for all activities
                that occur under your account. You agree to provide accurate and complete information when creating
                your account.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="content">📝</span>
                4. User Content
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of the content you create using our services. By using our platform, you grant
                us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, and
                display your content solely for the purpose of providing you with our services. You are responsible
                for the accuracy and legality of your content.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="prohibited">🚫</span>
                5. Prohibited Conduct
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use our services for any unlawful or prohibited purpose. This includes, but is not
                limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
                <li className="mb-2">Violating any applicable laws or regulations.</li>
                <li className="mb-2">Infringing upon the intellectual property rights of others.</li>
                <li className="mb-2">Uploading or transmitting malicious software or viruses.</li>
                <li className="mb-2">Attempting to gain unauthorized access to our systems or other users&apos; accounts.</li>
                <li>Interfering with the operation of our services.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="property">©️</span>
                6. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All intellectual property rights in our platform, including but not limited to software, design,
                templates, and logos, are owned by or licensed to Resume Builder. You agree not to
                reproduce, modify, or distribute our intellectual property without our prior written consent.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="warranty">⚠️</span>
                7. Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, express or
                implied, including but not limited to warranties of merchantability, fitness for a particular
                purpose, and non-infringement. We do not warrant that our services will be uninterrupted or error-free.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="limit">📉</span>
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, Resume Builder shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising out of or in
                connection with your use of our services. Our total liability to you for any claim arising out of or
                relating to these terms or our services shall not exceed the amount you paid, if any, to us for the
                use of our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="change">🔄</span>
                9. Modifications to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify you of any
                significant changes by posting the updated terms on our website or by other reasonable means. Your
                continued use of our services after the effective date of any changes constitutes your acceptance
                of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="contact">✉️</span>
                10. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions or concerns about these Terms of Service, please contact us at:
                <a href="mailto:terms@resumebuilder.com" className="text-indigo-500 hover:underline ml-1">
                  terms@resumebuilder.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;