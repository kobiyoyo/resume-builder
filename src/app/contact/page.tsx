import React from "react";

const Page = () => {
    return (
        <form>
            <div className="flex justify-center pt-5 pb-5">
                <div className="w-3/4 md:w-2/4">
                    <div className="text-center font-bold text-3xl md:text-4xl block w-full">
                        Contact us
                    </div>
                    <div className="w-full mt-5">
                        <label className="text-[#5AB1BB]" htmlFor="name">Your name</label>
                        <input required className="text-[#2C3E50] block w-full border rounded h-10 pl-3 mt-2 mb-4 focus:outline-none focus:border-zinc-400" id="name" type="text" placeholder="Enter your name"></input>

                        <label className="text-[#5AB1BB]" htmlFor="email">Your email</label>
                        <input required className="text-[#2C3E50] block w-full border rounded h-10 pl-3 mt-2 mb-4 focus:outline-none focus:border-zinc-400" id="email" type="email" placeholder="Enter your email"></input>

                        <label className="text-[#5AB1BB]" htmlFor="message">Your message</label>
                        <textarea required className="text-[#2C3E50] block w-full resize-none border rounded h-20 pl-3 mt-2 mb-4 focus:outline-none focus:border-zinc-400" id="message" placeholder="Write your message here"></textarea>
                    </div>
                    <div className="flex justify-center">
                        {/* <button className="text-[#2C3E50] rounded-3xl bg-green-300 p-2 font-bold hover:bg-green-400 transition duration-150" type="submit">Send a message</button> */}
                        <button className="inline-flex items-center justify-center
                        px-4 py-2 rounded-md
                        bg-[#5AB1BB] text-white
                        hover:bg-emerald-400
                        transition-colors border-2 border-black">Send a message</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Page;