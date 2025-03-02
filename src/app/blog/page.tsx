import React from "react";
import BlogCard from "@/components/blog-card";
import BigBlogCard from "@/components/big-blog-card";

const Page = () => {
    let posts = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorImg: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg",
            authorName: "Bryce McDonald",
            date: "January 22nd 2025",
            title: "Craft Your Career",
            content: "Create a standout resume that tells your professional story. With customizable templates and helpful prompts, you can easily highlight your achievements and skills to attract potential employers."
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorImg: "https://petapixel.com/assets/uploads/2019/02/download-4.jpeg",
            authorName: "Jensen Huffman",
            date: "April 7th 2024",
            title: "Resume Revolution",
            content: "Simplify your job application process with a modern resume builder. Our platform allows you to create visually appealing resumes that effectively communicate your qualifications and experiences."
        },

        {
            id: 3,
            img: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorImg: "https://miro.medium.com/v2/resize:fit:1024/1*Nt39X5uC-FW8A94OtpgbJg.jpeg",
            authorName: "Elizabeth McGuire",
            date: "August 19th 2024",
            title: "Elevate Your Resume",
            content: "Enhance your job prospects with a polished resume. Our easy-to-use tools and expert tips guide you in crafting a document that captures attention and showcases your unique talents."
        },

        {
            id: 4,
            img: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorImg: "https://i.pinimg.com/originals/0f/3c/3c/0f3c3c76a16f10d43bf0b0c144cea281.png",
            authorName: "Lilah Guerrero",
            date: "November 3rd 2024",
            title: "Job Application Mastery",
            content: "Achieve resume writing success with our comprehensive platform. Build a professional resume that stands out in a competitive job market, ensuring you present your best self to employers."
        }
    ];

    let mainBlog = posts[0];
    posts = posts.slice(1);

    return (
        <section className="ml-16 mr-16 mb-16">
            <BigBlogCard
                    key = {mainBlog.id}
                    id = {mainBlog.id}
                    img = {mainBlog.img}
                    authorImg = {mainBlog.authorImg}
                    authorName = {mainBlog.authorName}
                    date = {mainBlog.date}
                    title = {mainBlog.title}
                    content = {mainBlog.content}
                    href = {"blog/" + mainBlog.id.toString()}
                />

            <div className="grid mt-4 gap-x-8 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {
                    posts.map((blog) => (
                    <BlogCard
                        key= {blog.id}
                        id = {blog.id}
                        img = {blog.img}
                        authorImg = {blog.authorImg}
                        authorName = {blog.authorName}
                        date = {blog.date}
                        title = {blog.title}
                        content = {blog.content}
                        href = {"blog/" + blog.id.toString()}
                    />
                    ))
                }
            </div>
        </section>  
    )
}

export default Page;