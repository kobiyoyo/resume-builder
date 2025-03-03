import Link from "next/link";
import React from "react";
import { BlogCardProps } from './types';

const BigBlogCard = ({ img, authorImg, authorName, date, title, content, href }: BlogCardProps) => {
    return (
        <Link href={href}>
            <div className="lg:grid lg:grid-cols-3 mx-auto w-full mt-4 shadow-2xl border-2 border-black rounded-md hover:shadow-lg duration-300">
                <img src={img} alt={title} className="w-full h-48 object-cover lg:h-max col-span-3 xl:col-span-2" />
                <div className="flex flex-col p-5 col-span-3 xl:col-span-1">
                    <div className="flex items-center p-3 md:p-4">
                        <div className="flex-none w-10 h-10 rounded-full">
                            <img src={authorImg} className="w-full h-full rounded-full" alt={authorName} />
                        </div>
                        <div className="ml-3">
                            <span className="block text-[#5AB1BB]">{authorName}</span>
                            <span className="block text-[#2C3E50] text-sm">{date}</span>
                            <span className="block text-[#2C3E50] text-sm">11 mins</span>
                        </div>
                    </div>

                    <div className="pt-3 mt-10 mb-10 md:mt-16 lg:mt-12">
                        <h3 className="text-5xl text-[#2C3E50]">
                            {title}
                        </h3>
                        <p className="text-[#2C3E50] text-lg md:text-2xl mt-1 md:mt-5">{content}</p>
                    </div>

                </div>
            </div>
        </Link>
    )
};

export default BigBlogCard;