import React from "react";
import { ArrowRight, Eye, MessageSquare } from "react-feather";
import { blogData } from "../constant/BlogData";

function Blog() {
  return (
    <section id="blog" className="max-w-screen-lg px-10 pt-10 pb-8">
      <div className=" pb-8">
        <h2 className="section-title">
          Our Blogs Coffee with trending topic for this week
        </h2>

        <div className="blog-content grids gap-12">
          {blogData.map((blog) => (
            <article className="blog-card" key={blog.id}>
              <div className="relative mb-6">
                <img src={blog.image} alt={blog.title} className="rounded-lg" />
                <a
                  href="#"
                  className="inline-flex bg-white/70 p-4 rounded-br-lg rounded-tl-lg text-3xl absolute right-0 bottom-0"
                >
                  <ArrowRight className=" hover:translate-x-1 duration-300" />
                </a>
              </div>
              <div className="blog-data">
                <h2 className="text-xl mb-3">{blog.title}</h2>
                <p className="mb-6">{blog.description}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-5" />
                    <span className="text-xs">{blog.comment}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-5" />
                    <span className="text-xs">{blog.like}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
