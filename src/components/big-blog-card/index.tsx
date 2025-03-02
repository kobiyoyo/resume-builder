import Link from "next/link";
import React from "react";
import { BlogCardProps } from './types'

const BigBlogCard = ({id, img, authorImg, authorName, date, title, content, href}: BlogCardProps) => {
    return (
        <Link href={href}>
            <article className="grid grid-cols-1 md:grid-cols-3 w-full mt-4 shadow-2xl border rounded-md hover:shadow-lg duration-300">
                <img src={img} alt={title} className="h-full rounded-md col-span-2" />
                <div className="items-center mt-2 pt-3 ml-4 mr-2">
                    <div className="flex h-16 justify-center">
                        <img src={authorImg} className="h-full rounded-full" alt={authorName} />
                    </div>
                    <div className="ml-3 text-center">
                        <span className="block text-[#5AB1BB]">{authorName}</span>
                        <span className="block text-[#2C3E50] text-lg">{date}</span>
                    </div>

                    <div className="pt-3 ml-4 mr-2 mb-3">
                        <h3 className="text-3xl text-[#5AB1BB]">
                            {title}
                        </h3>
                        <p className="text-[#2C3E50] text-lg mt-1">{content}</p>
                    </div>
                </div>
            </article>
        </Link>
    )
};

export default BigBlogCard;