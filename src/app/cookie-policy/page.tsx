import React from 'react';

const CookiePolicyPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-gray-100 to-gray-200 leading-relaxed antialiased min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <section className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="px-6 py-8 md:px-10 md:py-12">
            <h1 className="text-3xl font-bold text-indigo-700 tracking-tight mb-8 text-center">
              <span role="img" aria-label="cookie">🍪</span> Cookie Policy
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This Cookie Policy explains how Resume Builder uses cookies and similar technologies to
              recognize you when you visit our website. It explains what these technologies are and why we use them,
              as well as your rights to control our use of them.
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="info">ℹ️</span>
                1. What are Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a
                website. They are widely used to make websites work, or work more efficiently, as well as to provide
                information to the owners of the site.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="settings">⚙️</span>
                2. How We Use Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies for several purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
                <li className="mb-2"><strong>Essential Cookies:</strong> These cookies are necessary for the basic functionality of our website, such as enabling you to log in and access secure areas.</li>
                <li className="mb-2"><strong>Performance Cookies:</strong> These cookies allow us to analyze how you use our website so we can improve its performance and user experience. For example, they help us understand which pages are most popular.</li>
                <li className="mb-2"><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, more personal features.</li>
                <li><strong>Advertising Cookies:</strong> These cookies are used to deliver advertisements that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement as well as help measure the effectiveness of advertising campaigns.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="types">🍪🍪</span>
                3. Types of Cookies We Use
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use the following types of cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
                <li className="mb-2"><strong>Session Cookies:</strong> These cookies are temporary and expire when you close your browser.</li>
                <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a longer period or until you manually delete them.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="third-party">🌐</span>
                4. Third-Party Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may also use third-party cookies to help us analyze website traffic, understand user behavior, and
                deliver relevant advertising. These third parties have their own privacy policies and cookie policies,
                which we encourage you to review.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="control">⚙️</span>
                5. Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences
                through your web browser settings. Most web browsers allow you to control cookies through their settings
                preferences. You can usually find these settings in the &quot;options&quot; or &quot;preferences&quot; menu of your browser.
                For more information on how to manage and delete cookies, please refer to your browser&apos;s help
                documentation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please note that if you choose to disable cookies, some features of our website may not function
                properly.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="update">🔄</span>
                6. Updates to This Cookie Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our use of cookies or
                relevant regulations. We will notify you of any significant changes by posting the updated policy on
                our website. Please check this page periodically for updates.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span role="img" aria-label="contact">✉️</span>
                7. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                <a href="mailto:cookies@resumebuilder.com" className="text-indigo-500 hover:underline ml-1">
                  cookies@resumebuilder.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicyPage;