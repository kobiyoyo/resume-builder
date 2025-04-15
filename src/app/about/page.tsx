import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-100 leading-relaxed">
      <main className="py-20">
        <div className="container mx-auto px-5">
          <section className="flex gap-10 items-center mb-16 bg-gray-200 p-10 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 md:flex-row flex-col-reverse text-center md:text-left">
            <div className="flex-2 sm:w-2/4">
              <h2 className="text-3xl text-gray-900 font-semibold mb-6 leading-tight tracking-tight">
                Our Story: Crafting Your Success, One Resume at a Time
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're a passionate crew dedicated to making the resume creation process not just easy, but genuinely
                empowering. Born from the frustration of clunky, outdated resume tools, Our Resume Builder emerged
                as a beacon of simplicity and effectiveness.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team Brainstorming and Collaboration"
                className="rounded-md shadow-md w-full h-auto"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="text-blue-600 text-4xl mb-6">🚀</div> {/* Rocket Icon */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To propel your career forward by providing an intuitive platform brimming with professionally designed
                templates and smart features that showcase your unique story.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="text-blue-600 text-4xl mb-6">👁️</div> {/* Eye Icon */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the go-to resource for job seekers worldwide, fostering a community where everyone feels confident
                in presenting their skills and achieving their professional aspirations.
              </p>
            </div>
          </section>

          <section className="mb-20 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-10 tracking-tight">Our Guiding Principles</h3>
            <ul className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <li className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-6 text-left">
                <span className="text-green-500 text-3xl">👤</span> {/* User Icon */}
                <div>
                  <strong className="text-gray-900 block mb-1 tracking-tight">You First:</strong> We're obsessed with
                  creating a user-friendly experience tailored to your needs.
                </div>
              </li>
              <li className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-6 text-left">
                <span className="text-green-500 text-3xl">💡</span> {/* Lightbulb Icon */}
                <div>
                  <strong className="text-gray-900 block mb-1 tracking-tight">Always Innovating:</strong> We're constantly
                  exploring fresh ideas and technologies to make your resume shine.
                </div>
              </li>
              <li className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-6 text-left">
                <span className="text-green-500 text-3xl">✔️</span> {/* Check Circle Icon */}
                <div>
                  <strong className="text-gray-900 block mb-1 tracking-tight">Quality Matters:</strong> We're committed
                  to providing top-notch templates and tools that deliver real results.
                </div>
              </li>
              <li className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-6 text-left">
                <span className="text-green-500 text-3xl">♿</span> {/* Universal Access Icon */}
                <div>
                  <strong className="text-gray-900 block mb-1 tracking-tight">Open to All:</strong> We believe everyone
                  deserves access to powerful resume-building tools, regardless of their background.
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-20 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-10 tracking-tight">Meet the Faces Behind the Magic</h3>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64">
                <img
                  src="https://avatars.githubusercontent.com/u/23278161?v=4"
                  alt="Desmond Chubiyojo Adama - Co-Founder & CEO"
                  className="rounded-full object-cover shadow-sm w-24 h-24 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight"> Desmond Chubiyojo Adama </h4>
                <p className="text-gray-600 text-sm leading-relaxed">Co-Founder & CEO</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64">
                <img
                  src="https://pps.whatsapp.net/v/t61.24694-24/462692965_572703635369658_5106153437274736900_n.jpg?ccb=11-4&oh=01_Q5Aa1QF0Yj4FMN_HtiNvp7md_w3BbrBXBiRPX4skuja_CFEshA&oe=680BA096&_nc_sid=5e03e0&_nc_cat=108"
                  alt="Emmanuel Odubiyi - Head of Design"
                  className="rounded-full object-cover shadow-sm w-24 h-24 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight"> Emmanuel Odubiyi </h4>
                <p className="text-gray-600 text-sm leading-relaxed">Head of Design</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc06.deviantart.net%2Ffs70%2Fi%2F2010%2F274%2Fe%2Fe%2Fstick_man_by_minimoko94-d2zvfn8.png&f=1&nofb=1&ipt=c9ccef47324a01c870f1670d291a8a61ba8b7c2cb9fb61c7ee3185e25ba98493"
                  alt="Dat Luong - Co-Founder & CTO"
                  className="rounded-full object-cover shadow-sm w-24 h-24 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight"> Dat Luong </h4>
                <p className="text-gray-600 text-sm leading-relaxed">Co-Founder & CTO</p>
              </div>
            </div>
          </section>

          <section className="text-center py-16 bg-blue-50 rounded-xl shadow-md">
            <h3 className="text-3xl font-semibold text-blue-700 tracking-tight mb-8">Ready to Craft Your Standout Resume?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Join our community and unlock the power of a professionally designed resume. Your dream job awaits!
            </p>
            <a
              href="/signup"
              className="inline-block bg-white text-blue-600 py-3 px-8 rounded-md font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              Start Building Now
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutUsPage;