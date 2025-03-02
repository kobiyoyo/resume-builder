import Link from "next/link";
import React from "react";
import { BlogCardProps } from "../blog-card/types";



const BlogCard: React.FC<BlogCardProps> = ({id, img, authorImg, authorName, date, title, content, href}: BlogCardProps) => {
    return (
        <article className="max-w-lg mx-auto mt-4 shadow-2xl border rounded-md hover:shadow-lg duration-300 hover:scale-95">
            <Link href={href}>
                <img src={img} alt={title} className="w-full h-48 rounded-t-md" />
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                    <div className="flex-none w-10 h-10 rounded-full">
                        <img src={authorImg} className="w-full h-full rounded-full" alt={authorName} />
                    </div>
                    <div className="ml-3">
                        <span className="block text-[#5AB1BB]">{authorName}</span>
                        <span className="block text-[#2C3E50] text-sm">{date}</span>
                    </div>
                </div>

                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-[#5AB1BB]">
                        {title}
                    </h3>
                    <p className="text-[#2C3E50] text-sm mt-1">{content}</p>
                </div>
            </Link>
        </article>
    )
};

export default BlogCard;