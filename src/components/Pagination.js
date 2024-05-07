import React from 'react'

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    console.log(totalItems);
    console.log(itemsPerPage);
    console.log(totalPages);

    const handleClick = (page) => {
        onPageChange(page);
      };

      const renderPageNumbers = () => {
        const pageNumbers = [];
    
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(
            <li key={i} onClick={() => handleClick(i)} className={currentPage === i ? 'active' : ''}>
              {i}
            </li>
          );
        }
    
        return pageNumbers;
      };

  return (
    <div className="pagination">
      <ul className='flex gap-3 cursor-pointer'>
        {renderPageNumbers()}
      </ul>
    </div>
  )
}

export default Pagination