
export default function Home() {
  return (
    <div>
      {/* Section 1 */}
      <section className="bg-gray-200 flex items-center flex-wrap pl-0 pr-0">
        <p className="font-bold text-4xl w-full text-center pt-14">Build Professional Resumes in Minutes</p>
        <p className="w-full text-center pt-7">Create standout resumes with our easy-to-use builder. Choose from 50+ professional templates</p>
        <div className="w-full flex justify-center pt-7 pb-32">
          <button className="inline-flex items-center justify-center
            px-4 py-2 rounded-md
            bg-[#5AB1BB] text-white
            hover:bg-emerald-400
            transition-colors border-2 border-black">Get Started</button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-100 flex justify-center flex-wrap pt-7 pb-7">
        <div className="text-3xl font-bold w-full text-center">Why Choose Us</div>
        {/* Box Container */}
        <div className="flex flex-wrap md:flex-nowrap justify-center w-full pt-7 pb-7">
          {/* Box 1 */}
          <div className="bg-white w-full md:w-1/4 flex flex-wrap justify-center mx-4 my-4 rounded-md">
            <div className="w-full flex justify-center pt-2 pb-4">
              <img className="w-1/4 rounded-full" src="https://cdn4.iconfinder.com/data/icons/seo-4-2-filled-outline/128/SEO_-_4._2_-_Filled_Outline_-_32-10-1024.png"></img>
            </div>
            <div className="text-xl font-bold w-full text-center">Professional Templates</div>
            <div className="w-full text-center pt-3 pb-12 mx-4">Choose from 50+ designed templates</div>
          </div>
          {/* Box 2 */}
          <div className="bg-white w-full md:w-1/4 flex flex-wrap justify-center mx-4 my-4 rounded-md">
            <div className="w-full flex justify-center pt-2 pb-4">
              <img className="w-1/4 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3858/3858639.png"></img>
            </div>
            <div className="text-xl font-bold w-full text-center">Easy to Use</div>
            <div className="w-full text-center pt-3 pb-12 mx-4">Simple interface for quick editing</div>
          </div>
          {/* Box 3 */}
          <div className="bg-white w-full md:w-1/4 flex flex-wrap justify-center mx-4 my-4 rounded-md">
            <div className="w-full flex justify-center pt-2 pb-4">
              <img className="w-1/4 rounded-full" src="https://icon-library.com/images/friendly-icon/friendly-icon-4.jpg"></img>
            </div>
            <div className="text-xl font-bold w-full text-center">ATS Friendly</div>
            <div className="w-full text-center pt-3 pb-12 mx-4">Optimized for Applicant Tracking Systems</div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="pt-7 pb-32">
        <div className="text-3xl font-bold w-full text-center pb-7">How it Works</div>
        {/* Circles Container */}
        <div className="flex flex-wrap md:flex-nowrap justify-around">
          {/* Circle 1 */}
          <div className="w-full md:w-1/4 my-4">
            <div className="flex flex-wrap justify-center">
              <div className="bg-blue-500 rounded-full w-20 h-20 text-center content-center text-white text-2xl">1</div>
            </div>
            <div className="text-xl font-bold w-full text-center pt-2 pb-2">Choose Template</div>
            <div className="w-full text-center">Select from 50+ professional templates</div>
          </div>

          {/* Circle 2 */}
          <div className="w-full md:w-1/4 my-4">
            <div className="flex flex-wrap justify-center">
              <div className="bg-blue-500 rounded-full w-20 h-20 text-center content-center text-white text-2xl">2</div>
            </div>
            <div className="text-xl font-bold w-full text-center pt-2 pb-2">Fill Details</div>
            <div className="w-full text-center">Add your information with our guided process</div>
          </div>

          {/* Circle 3 */}
          <div className="w-full md:w-1/4 my-4">
            <div className="flex flex-wrap justify-center">
              <div className="bg-blue-500 rounded-full w-20 h-20 text-center content-center text-white text-2xl">3</div>
            </div>
            <div className="text-xl font-bold w-full text-center pt-2 pb-2">Download & Share</div>
            <div className="w-full text-center">Get your professional resume in PDF format</div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-gray-100 pb-10">
        <div className="text-3xl font-bold text-center w-full pt-10 pb-12">Popular Templates</div>
        {/* Templates Container */}
        <div className="flex flex-wrap md:flex-nowrap justify-center w-full">
          {/* Template 1 */}
          <a href="#" className="bg-white flex flex-wrap justify-center w-full md:w-1/5 mx-12 my-4 rounded-md border-2 hover:border-black transition duration-150">
            <div className="mx-4 my-4 w-full">
              <img className="" src="https://cdn.create.microsoft.com/catalog-assets/en-us/2e58ab59-5697-4866-8909-b9479f773474/thumbnails/600/clean-elegant-resume-blue-modern-simple-1-1-5613430eb530.webp"></img>
            </div>
            <div className="text-2xl font-bold text-center w-full pb-5">Professional</div>
          </a>

          {/* Template 2 */}
          <a href="#" className="bg-white flex flex-wrap justify-center w-full md:w-1/5 mx-12 my-4 rounded-md border-2 hover:border-black transition duration-150">
            <div className="mx-4 my-4 w-full">
              <img className="" src="https://cdn.create.microsoft.com/catalog-assets/en-us/a9c0dd13-d04c-48e2-9dfe-0bb02e3ad10e/thumbnails/600/modern-chronological-resume-yellow-vintage-retro-1-1-b9df652abfe2.webp"></img>
            </div>
            <div className="text-2xl font-bold text-center w-full pb-5">Modern</div>
          </a>

          {/* Template 3 */}
          <a href="#" className="bg-white flex flex-wrap justify-center w-full md:w-1/5 mx-12 my-4 rounded-md border-2 hover:border-black transition duration-150">
            <div className="mx-4 my-4 w-full">
              <img className="" src="https://cdn.create.microsoft.com/catalog-assets/en-us/7d43231b-2180-47fa-927e-9b7d536a517b/thumbnails/600/creative-food-service-resume-blue-modern-geometric-1-1-4d5c6e4dd912.webp"></img>
            </div>
            <div className="text-2xl font-bold text-center w-full pb-5">Creative</div>
          </a>
        </div>

        <div className="w-full flex justify-center pt-7 pb-32">
          <form action={"#"}>
          <button type="submit" className="text-blue-400 rounded-sm bg-white pt-4 pb-4 pl-8 pr-8 hover:bg-blue-100 transition duration-150 border-blue-300 border-2 font-thin">View All Templates</button>
          </form>
          
        </div>
      </section>
    </div>
  );
}
