import React, { useEffect, useState } from "react";
import "../assets/css/blogPage.css";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

import axios from "axios";

export const BlogPage = () => {

  const id = useParams();
  const [fullBlog, setFullBlog] = useState([]);
  useEffect(()=>{
    axios.get("http://ec2-3-109-32-46.ap-south-1.compute.amazonaws.com/api/allblogs")
    .then((resp) => {
      
      setFullBlog(resp.data.AllBlog);
    })
    .catch((error)=>{
      console.log(error);
    })

  },[])

  const newData = fullBlog?.filter((elem) => {
    return elem._id === id.id;
  })




  console.log(newData)

  return (
    <>
      <div className="container">
        <div className="full-blog">
          <div className="mainBlog">
             { newData[0] &&  <div className="hero">
                <h6 className="card-blog-title">{newData[0]?.blogTitle}</h6>
                <strong className="card-blog-date">
                  Published by {newData[0]?.CompanyName}
                  <span>{newData[0]?.UploadedTime}</span>
                </strong>
                <div className="card-blog-top">
                  <img
                    src={`http://ec2-3-109-32-46.ap-south-1.compute.amazonaws.com/api/images/coverimage/${newData[0]?.CoverImage}`}
                    alt="" />
                </div>
                  <div className="card-blog-bottom">
                    <div className="card-blog-content">{HTMLReactParser(newData[0]?.BlogContent)}</div>
                </div> 
              </div>}
          </div>
        </div>
      </div>
    </>
  );
};
