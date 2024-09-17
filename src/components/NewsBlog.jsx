import React from "react";
import { Blog } from "./Blog";

export const NewsBlog = () => {
  return (
    <>
      <section>
        <div className="news-blogs">
          <h2 className="Section-Title">
          Latest <span>Updates</span>
          </h2>
          <Blog />
        </div>
      </section>
    </>
  );
};
