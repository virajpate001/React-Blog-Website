import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ products }) => {
  const [popularBlog, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.products.slice(0, 15)));
  }, []);

  return (
    <div className=" w-2/4 ">
      <div>
        <h3>Popular Blogs</h3>
        <div>
          {popularBlog.slice(0, 5).map((products) => (
            <div key={products.id} className=" border-b-2 mb-3 ">
               <Link to={`/products/${products.id}`}><h4>{products.title}</h4></Link>

              <Link to={`/products/${products.id}`}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
