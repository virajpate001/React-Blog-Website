import React from 'react'
import Banner from '../components/Banner'
import Blogpage from '../components/Blogpage'

const Blog = () => {
  return (
   <>
    <Banner mainTitle="Blog" mainPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, at?"/>
    
     {/* blog list */}

     <div className=' max-w-7xl mx-auto '>
        <Blogpage/>
     </div>
   
   </>

    
  )
}

export default Blog