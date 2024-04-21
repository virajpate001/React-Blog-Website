import React from 'react'

const BlogPagnation = ({onPageChange, currentPage, blogs, pageSize}) => {

  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderpaginationLinks = ()=>{
    return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber)=>(
      
        <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
        <a className=' p-4 pagein'  onClick={()=> onPageChange(pageNumber)}>{pageNumber}</a>
      </li>
      
    ))
  }


  return (
    <div className='blogPagination m-8 '>
      <ul>
      <li className=' flex justify-center items-center content-center gap-3 '>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <div className='flex'>
          {renderpaginationLinks()}
        </div>
        <button onClick={() => onPageChange(currentPage +1)} disabled={currentPage === totalPages}>Next</button>
      </li>
    </ul>
    </div>
  )
}

export default BlogPagnation