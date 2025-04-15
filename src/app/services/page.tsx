import React from 'react';

const ServicesPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50 leading-relaxed antialiased">
      <main className="py-24">
        <div className="container mx-auto px-5">
          <section className="bg-blue-50 rounded-xl shadow-lg p-12 text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 tracking-tight mb-8">
              Empowering Your Career Journey with Expert Resume Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We provide a suite of meticulously designed services to help you craft a resume that not only looks
              professional but also effectively communicates your unique value and career aspirations.
            </p>
          </section>

          <section className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
              Explore Our Comprehensive Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="text-blue-600 text-5xl mb-8">📄</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Professionally Designed Templates
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Access a curated selection of modern, ATS-friendly resume templates, crafted by design experts to
                  ensure your application makes a strong visual impact.
                </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="text-blue-600 text-5xl mb-8">✨</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Intuitive Drag-and-Drop Builder
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Our user-friendly interface simplifies the resume creation process with an intuitive drag-and-drop
                  builder, allowing you to focus on your content effortlessly.
                </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="text-blue-600 text-5xl mb-8">🤖</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                  AI-Powered Content Enhancement
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Harness the power of artificial intelligence to receive intelligent suggestions for improving your
                  resume content, highlighting key skills and experiences effectively.
                </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="text-blue-600 text-5xl mb-8">🔍</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                  ATS-Friendly Optimization
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Ensure your resume is fully compatible with Applicant Tracking Systems (ATS) through our optimization
                  tools and expert guidance, increasing your chances of passing initial screenings.
                </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="text-blue-600 text-5xl mb-8">✍️</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Professional Cover Letter Builder
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Create compelling cover letters that perfectly complement your resume, allowing you to personalize
                  your applications and make a memorable first impression on potential employers.
                </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="text-blue-600 text-5xl mb-8">📊</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Resume Performance Analytics
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Gain valuable insights into how your resume is performing with our tracking and analytics features,
                  empowering you to make data-driven refinements for better results.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center py-20 bg-green-50 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 tracking-tight mb-10">
              Ready to Transform Your Job Application?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto mb-12">
              Explore our full range of services and take a significant step towards crafting a resume that truly
              reflects your skills, experience, and ambitions. Your dream career is within reach.
            </p>
            <a
              href="/signup"
              className="inline-block bg-green-500 text-white py-4 px-10 rounded-md font-bold hover:bg-green-600 transition-colors duration-300 shadow-md text-lg"
            >
              Sign Up & Start Building Now
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;