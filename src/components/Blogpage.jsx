import React, { useState } from "react";
import BlogPagnation from "./BlogPagnation";
import BlogCard from "./BlogCard";
import BlogCategory from "./BlogCategory";

const Blogpage = () => {
  const [blogs, setBlogs] = useState([]);

  useState(() => {
    async function fetchBlog() {
      let url = `http://localhost:3000/blogsdata.json`;

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlog();
  }, []);



  return <>
      {/* Blog Category Section */}
        <div>
        <BlogCategory/> 
        </div>
      {/* Blog card sec */}
      <div><BlogCard blogs={blogs}/></div>
      {/* Blog Pagination sec */}
      <div><BlogPagnation/></div>
  </>;
};

export default Blogpage;
