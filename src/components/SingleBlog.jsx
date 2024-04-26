import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBlog = () => {

  const data = useLoaderData();


  if (typeof data !== 'object' || Object.keys(data).length === 0) {
    return <div>Data is not available or empty</div>;
  }

  const{id, title,thumbnail, description, price, images, discountPercentage} = data;

  return (
   <div className=' max-w-7xl mx-auto my-12 '>
     
     <div className=' lg:w-3/4 mx-auto'>

      <div>
        <img src={thumbnail} className='w-full mx-auto rounded' alt="" />
      </div>

      <h2>{title}</h2>

       <p>Price: {price}</p>
       <p>discountPercentage:- {discountPercentage}</p>

       <div className="flex justify-center">
          {images.map((image, index) => (
            <img key={index} src={image} className="w-1/4 mx-2" alt={`Image ${index + 1}`} />
          ))}
        </div>

     </div>


    </div>
  )
}

export default SingleBlog