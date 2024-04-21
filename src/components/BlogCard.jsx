import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";


const BlogCard = ({blogs, currentPage, selectCategory, pageSize}) => {
 
  let filterdBlog = blogs.filter((blogs)=> !selectCategory || blogs.category === selectCategory).slice((currentPage -1)*pageSize, currentPage * pageSize);

  return (
    <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
       {
        filterdBlog.map((blog) => <Link key={blog.id} className='p-5 shadow-lg rounded cursor-pointer '>
          <div>
             <img src={blog.image} alt="" className=' w-full ' />
          </div>
          <h3 className='mt-4 mb-2 font-bold '>{blog.title}</h3>
          <p className='mb-2'><FaUser className=' inline-flex items-center mr-2 '/>{blog.author}</p>
          <p className='mb-2 text-sm '>Published {blog.published_date}</p>
        </Link>)
       }
    </div>
  )
}

export default BlogCard