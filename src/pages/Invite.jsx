import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

const Invite = () => {

    const [currentPage, setCurrentPage] = useState(1);
    
    const itemsPerPage = 6;
    const [data] = useState([
        {id : 1, imgUrl: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg', title: 'Title 1', category: 'Arts' },
        {id : 2, imgUrl: 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg', title: 'Title 2', category: 'Commerce' },
        {id : 3, imgUrl: 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg', title: 'Title 3', category: 'Arts' },
        {id : 4, imgUrl: 'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg', title: 'Title 4' ,category: 'Commerce'},
        {id : 5, imgUrl: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg', title: 'Title 5' ,category: 'Science' },
        {id : 6, imgUrl: 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg', title: 'Title 6' ,category: 'Arts'},
        {id : 7, imgUrl: 'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg', title: 'Title 7' , category: 'Science'},
        {id : 8, imgUrl: 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg', title: 'Title 8' , category: 'Commerce'},
        {id : 9, imgUrl: 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg', title: 'Title 9',category: 'Arts' },
        {id : 10, imgUrl: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg', title: 'Title 10' ,category: 'Science'},
    ])


    const [selectCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setCurrentPage(1);
    }
    

    const handlePageChange  = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const filteredItems = selectCategory ? data.filter(item => item.category === selectCategory) : data;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    

  return (
    <>

  <div className="flex gap-3 justify-center ">
    <button className={selectCategory === null ? 'active' : ''} onClick={()=> handleCategoryChange(null) }>All</button>
    <button className={selectCategory === 'Arts' ? 'active' : ''} onClick={()=> handleCategoryChange('Arts')} >Arts</button>
    <button className={selectCategory === 'Commerce' ? 'active' : ''} onClick={()=> handleCategoryChange('Commerce')}>Commerce</button>
    <button className={selectCategory === 'Science' ? 'active' : ''} onClick={()=> handleCategoryChange('Science')}>Science</button>
  </div>

    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 py-4 px-6 '>
        
        {currentItems.map(item => (
          <Link key={item.id} to={`/item/${item.id}`}>
            <div>
                <img width="400" height="250" src={item.imgUrl} alt={item.title} />
                <h2>{item.title}</h2>
            </div>
          </Link>
        ))

        }


     <Pagination
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      totalItems={data.length}
      onPageChange={handlePageChange}
     />

    </div>
    </>
  )
}

export default Invite