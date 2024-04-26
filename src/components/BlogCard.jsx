import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";


const BlogCard = ({products, currentPage, selectCategory, pageSize}) => {
 
  let filterdProduct = products;

  return (
    <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
       {
        filterdProduct.map((products) => <Link to={`/products/${products.id}`} key={products.id} className='p-5 shadow-lg rounded cursor-pointer '>
          <div>
             <img src={products.thumbnail} alt="" className=' w-full ' />
          </div>
          <h3 className='mt-4 mb-2 font-bold '>{products.title}</h3>

          <h3 className=' text-gray-400 '>{products.description}</h3>
          
        </Link>)
       }
    </div>
  )
}

export default BlogCard