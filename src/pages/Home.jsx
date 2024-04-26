import React from 'react'
import Banner from '../components/Banner'
import Test from '../components/Test'

const Home = () => {
  return (
    <div>
      <Banner mainTitle="Welcome to Blog Website" mainPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, at?"/>
      <div>
          <Test/>
        </div>
    </div>
  )
}

export default Home