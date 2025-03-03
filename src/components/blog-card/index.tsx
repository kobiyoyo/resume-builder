import Link from "next/link";
import React from "react";
import { BlogCardProps } from "./types";

const BlogCard = ({img, authorImg, authorName, date, title, content, href}: BlogCardProps) => {
    return (
        <article className="max-w-lg mx-auto mt-4 shadow-2xl border rounded-md hover:shadow-lg duration-300 border-2 border-black ">
            <Link href={href}>
                <img src={img} alt={title} className="w-full h-72 rounded-t-md object-cover" />
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

                <div className="p-3 md:p-6">
                    <h3 className="text-3xl text-[#2C3E50]">
                        {title}
                    </h3>
                    <p className="text-[#2C3E50] text-xl mt-1">{content}</p>
                </div>
            </Link>
        </article>
    )
};

export default BlogCard;