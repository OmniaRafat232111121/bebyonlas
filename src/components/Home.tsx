import React from 'react'
import Carousel from './carousel/Carousel'
import cImage from "../../public/images/c1.png";
import ccImage from "../../public/images/c2.png";
import mImage from "../../public/images/l1.png";
import mmImage from "../../public/images/l2.png";
import Image from "next/image";

const Home = () => {
    const slides = [
        cImage,
        ccImage,
    ]

  return (
    <div className='bg-white 
    flex flex-wrap   lg:mt-[10%]   sm:mt-28 mt-24 pr-8 pl-8 min-w-7xl'>
        <div className="lg:w-[25%] sm:mx-auto sm:mt-[10px]  flex flex-col gap-[28px]">
            <Image className="max-w-[95%]" src={mImage} alt="seasonal-capsule-w17" />
            <Image className="max-w-[95%]" src={mmImage} alt="seasonal-capsule-w17" />
            </div>
        <Carousel slides={slides} controls indicators/>
        
      
    </div>
  )
}

export default Home
