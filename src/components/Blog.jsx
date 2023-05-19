import React from "react";
import { ArrowRight, Eye, MessageSquare } from "react-feather";
import { blogData } from "../constant/BlogData";

function Blog() {
  return (
    <section id="blog" className="max-w-screen-lg px-10 pt-10 pb-8">
      <div className="blog-container">
        <h2 className="section-title">
          Our Blogs Coffee with trending topic for this week
        </h2>

        <div className="blog-content grids">
          {blogData.map((blog) => (
            <article className="blog-card" key={blog.id}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} className="blog-img" />
                <a href="#" className="blog-button">
                  <ArrowRight />
                </a>
              </div>
              <div className="blog-data">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-description">{blog.description}</p>
                <div className="blog-footer">
                  <MessageSquare />
                  <span>{blog.comment}</span>
                </div>
                <div className="blog-footer">
                  <Eye />
                  <span>{blog.like}</span>
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
