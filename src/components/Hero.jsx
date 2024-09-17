import React from "react";
import "../assets/css/Hero.css";
import BlogCover from "../assets/Images/cover2.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="Hero-title">
          <h2 className="Section-Title">
            Latest Lovely Wallet <span>Blogs</span>
          </h2>
          <p className="text">
            Explore the latest topics and insights to help you <br />
            navigate Web3 with confidence and ease.
          </p>
          <button className="btn twitter-flex-btn">Follow Lovely Wallet on <i className="bi bi-twitter-x"></i></button>
        </div>
        <div className="hero-blog">
          <div className="blog-top">
            <img src={BlogCover} alt="" />
          </div>
          <div className="blog-bottom">
            <span className="blog-date">
              May 13, 2024
            </span>
            <h6 className="blog-title">
            Crypto Gaming Tokens: Explained
            </h6>
            <Link to="/blog" className="blog-footer">Learn More <i className="bi bi-arrow-right-circle-fill"></i></Link>
          </div>
        </div>
      </div>
    </>
  );
};
