import React from "react";
import { Hero } from "../components/Hero";
import { Blog } from "../components/Blog";
import { AdminBlog } from "../components/AdminBlog";
import { NewsBlog } from "../components/NewsBlog";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <Blog />
        <AdminBlog />
        <NewsBlog />
      </div>
    </>
  );
};
