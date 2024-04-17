import React from 'react'
import { Link } from 'react-router-dom';
import { IconName } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = (props) => {
  return (
    <div className='px-4 py-32 bg-black '>
       <div className=' text-white text-center '>
          <h1 className=' text-5xl font-bold mb-5 '>{props.mainTitle}</h1>
          <p className='text-gray-100 mb-8 w-full '>{props.mainPara}</p>
          <Link className=' bg-orange-500 w-36 p-4  hover:bg-red-950  font-medium inline-flex  justify-center items-center ' to={"/"}>Learn More <FaLongArrowAltRight /> </Link>
       </div>
    </div>
  )
}

export default Banner;