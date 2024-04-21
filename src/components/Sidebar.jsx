import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
 
    const[popularBlog, setPopularBlogs] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/blogsdata.json").then(res => res.json()).then(data => setPopularBlogs(data.slice(0,15)))
    },[])
 
    return (
    <div>
        <div>
            <h3>Popular Blogs</h3>
            <div>
                {
                    popularBlog.slice(0,5).map(blog => <div key={blog.id}>
                         <h4>{blog.title}</h4>
                       
                         <Link to="/">Read More</Link>
                        </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar