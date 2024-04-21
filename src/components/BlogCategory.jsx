import React from 'react'

const BlogCategory = ({OnSelectCategory, activeCategory}) => {

   const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className=' px-4 mb-8 lg:space-x-16 flex items-center flex-wrap border-b-2 py-5 '>
      <button onClick={() => OnSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "": "active"}`}>All</button>
      {
        categories.map((category) =>(
          <button onClick={()=> OnSelectCategory(category)}  
          className={`mr-2 space-x-16 ${activeCategory === category ? "active" : ""}`} key={category}>{category}</button>
        ))
      }
    </div>
  )
}

export default BlogCategory