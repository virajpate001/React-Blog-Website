import React from 'react'
import Banner from '../components/Banner'
import Test from '../components/Test'
import BlogCard from "../components/BlogCard";
import Blogpage from '../components/Blogpage';

const Home = ({products}) => {
  return (
    <div>
      <Banner mainTitle="Welcome to Blog Website" mainPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, at?"/>
     
      <Blogpage/>
     
    </div>
  )
}

export default Home