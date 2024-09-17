import React, { useEffect, useState } from "react";
import "../assets/css/AdminBlog.css";
import HTMLReactParser from "html-react-parser";
import axios from "axios";
import { Link } from "react-router-dom";

export const AdminBlog = () => {


  const [post, setPost] = useState([]);

  useEffect(() => {
   axios
      .get("http://localhost:8000/allblogs")
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

const filter = post.filter((element) => {
  return element.CompanyEmail === "balraj@crypto306.com"
})

  return (
    <>
      <section>
        <div className="admin-blogs">
          <h2 className="Section-Title">
            Latest Updates from Lovely <span>Wallet</span>
          </h2>
          <div className="blogField">
            {filter?.slice(0, currentBlog * 2).map((elem, key) => (
              <div className="card-admin-blog" key={key}>
                <div className="admin-blog-cover">
                  <img src={`http://localhost:8000/images/coverimage/${elem.CoverImage}`} alt="" />
                </div>
                <div className="card-blog-bottom">
                  <span className="card-blog-date">
                    {elem.UploadedTime} 
                    {/* - {elem.CompanyName} */}
                  </span>
                  <h6 className="card-blog-title">{elem.blogTitle}</h6>
                  <p className="card-blog-content">{HTMLReactParser(elem.BlogContent)}</p>
                  <Link to = {`/blog/${elem._id}`} className="card-blog-footer" >
                    Learn More <i className="bi bi-arrow-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="LoadMore">
            {currentBlog < post?.length / 2 && (
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
        </div>
      </section>
    </>
  );
};
