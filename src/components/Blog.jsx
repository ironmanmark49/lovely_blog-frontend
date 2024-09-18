import React, { useEffect, useState } from "react";
import "../assets/css/Blog.css";
import HTMLReactParser from "html-react-parser";
import axios from "axios";
import { Link } from "react-router-dom";

export const Blog = () => {

  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://ec2-3-109-32-46.ap-south-1.compute.amazonaws.com/api/allblogs")
      .then((response) => {
        setPost(response.data.AllBlog);
      })
      .catch((error) => {
        console.log("server Error");
      });
  }, []);

  const [currentBlog, setCurrentBlog] = useState(1);
  const handleLoadMore = () => {
    setCurrentBlog(currentBlog + 1);
  };
  const handleShowLess = () => {
    setCurrentBlog(1);
  };
  return (
    <>
      <section>
        <div className="blogField">
          {post?.slice(0, currentBlog * 4).map((elem, key) => (
            <div className="blog" key={key}>
              <div className="card-blog-top">
                <img src={`http://ec2-3-109-32-46.ap-south-1.compute.amazonaws.com/api/images/coverimage/${elem.CoverImage}`} alt="" />
              </div>
              <div className="card-blog-bottom">
                <span className="card-blog-date">{elem.UploadedTime} - {elem.CompanyName}</span>
                <h6 className="card-blog-title">{elem.blogTitle}</h6>
                <p className="card-blog-content">
                  <div>{HTMLReactParser(elem.BlogContent)}</div>
                  </p>
                <Link to={`/blog/${elem._id}`} 
                  className="card-blog-footer">
                  Learn More <i className="bi bi-arrow-right-circle-fill"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="LoadMore">
          {currentBlog < post?.length / 5 && (
            <button className="btn " onClick={handleLoadMore}>
              Load More
            </button>
          )}
          {currentBlog > 1 && (
            <button className="btn " onClick={handleShowLess}>
              Show less
            </button>
          )}
        </div>
      </section>
    </>
  );
};
