import Head from "next/head";
import 'react-image-gallery/styles/css/image-gallery.css';
import c1 from "../public/images/1.png";
import cs1 from "../public/images/s/2.png";
import React, { useState } from 'react'
import cs2 from "../public/images/s/3.png";
import cs3 from "../public/images/s/4.png";
import c2 from "../public/images/2.png";
import c3 from "../public/images/3.png";
import c4 from "../public/images/4.png";
import c5 from "../public/images/5.png";
import c6 from "../public/images/6.png";
import c7 from "../public/images/7.png";
import c8 from "../public/images/8.png";
import c9 from "../public/images/9.png";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import SkeletonComponent from "../components/SkeletonComponent";
const Homee = () => {
    const title = 'Test Blog';
    const description = 'Welcome to my Notion Blog.'
    const suits=[
      {
        id:1,
        image:cs1,
        title:'بدلة سليم فيت بيج فاتح',
        details:'تفاصيل البدلة',
       color:"بيج",
      size:"  يوجد جميع المقاسات مع امكانية تفصيل بدلة",
      pieces:'القطع : بليزر + بنطلون + قميص',
      address:'متواجد بكثرة في فرع : 33 شارع الأسكندرية'
      }, {
        id:2,
        image:cs2,
        title:'بدلة سليم فيت بيج',
        details:'تفاصيل البدلة',
        color:"بيج",
        size:" يوجد جميع المقاسات مع امكانية تفصيل بدلة",
        pieces:'القطع : بليزر + بنطلون + قميص',
        address:'متواجد بكثرة في فرع : 33 شارع الأسكندرية'
      },
      {
        id:3,
        image:cs3,
        title:'بدلة سليم فيت كحلي',
        details:'تفاصيل البدلة',
        color:"كحلي",
        size:"  يوجد جميع المقاسات مع امكانية تفصيل بدلة",
        pieces:'القطع : بليزر + بنطلون + قميص',
        address:'متواجد بكثرة في فرع : 33 شارع الأسكندرية'
      },
      {
        id:4,
        image:cs3,
        title:'بدلة سليم فيت اسود',
        details:'تفاصيل البدلة',
        color:"اسود",
        size:" يوجد جميع المقاسات مع امكانية تفصيل بدلة",
        pieces:'القطع : بليزر + بنطلون + قميص',
        address:'متواجد بكثرة في فرع : 33 شارع الأسكندرية'
      },
      {
        id:5,
        image:cs2,
        title:'بدلة سليم فيت اسود',
        details:'تفاصيل البدلة',
        color:"اسود",
        size:" يوجد جميع المقاسات مع امكانية تفصيل بدلة",
        pieces:'القطع : بليزر + بنطلون + قميص',
        address:'متواجد بكثرة في فرع : 33 شارع الأسكندرية'
      },
      {
        id:5,
        image:cs1,
        title:'بدلة سليم فيت اسود',
        details:'تفاصيل البدلة',
        color:"اسود",
        size:"  يوجد جميع المقاسات مع امكانية تفصيل بدلة",
        pieces:'القطع : بليزر + بنطلون + قميص',
        address:'متواجد بكثرة في فرع : 33 شارع الأسكندرية'
      },


    ]


    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleClick = (suitId: number) => {
    setSelectedItemId(suitId);
  
  };
  const selectedItem = suits.find((suit) => suit.id === selectedItemId);

console.log(selectedItem)
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} title={"description"} content={description}/>
                <meta name={"og:title"} title={"og:title"} content={title}/>
                <meta name={"og:description"} title={"og:description"} content={title}/>
            </Head>
         
            <Header/>
            <Home/>
         {/*itemsin suits*/}
        <div className="grid grid-cols-3 lg:grid-cols-9 md:grid-cols-6 gap-4 pt-4 pb-4 bg-white pr-8 pl-8 text-center">
            <div>
              <Image className="max-w-[100%] rounded-full mb-1" src={c1} alt="seasonal-capsule-w17" /> 
            <p className="bg-red-700 py-2 mt-2 rounded-full hover:bg-black hover:text-red-700 cursor-pointer"      
             >بدل تركي</p>
              </div>

            <div><Image className="max-w-[100%] rounded-full mb-1" src={c2} alt="seasonal-capsule-w17" /> <p className="bg-red-700 py-2 mt-2 rounded-full hover:bg-black hover:text-red-700 cursor-pointer">بليزر</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c3} alt="seasonal-capsule-w17" /> <p className="bg-red-700 py-2 mt-2 rounded-full hover:bg-black hover:text-red-700 cursor-pointer">أزرار</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c4} alt="seasonal-capsule-w17" /> <p className="bg-red-700 py-2 mt-2 rounded-full hover:bg-black hover:text-red-700 cursor-pointer">ربطات العنق</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c5} alt="seasonal-capsule-w17" /> <p className="bg-red-700 py-2 mt-2 rounded-full hover:bg-black hover:text-red-700 cursor-pointer">الساعات</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c6} alt="seasonal-capsule-w17" /> <p className="bg-red-700 py-2 mt-2 rounded-full hover:bg-black hover:text-red-700 cursor-pointer">حزام</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c7} alt="seasonal-capsule-w17" /> <p className="bg-red-700 py-2 mt-2 rounded-full hover:bg-black hover:text-red-700 cursor-pointer">حذاء</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c8} alt="seasonal-capsule-w17" /> <p className="bg-red-700 py-2 mt-2 rounded-full hover:bg-black hover:text-red-700 cursor-pointer"> أطفال</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c9} alt="seasonal-capsule-w17" /> <p className="bg-red-700 py-2 mt-2 rounded-full hover:bg-black hover:text-red-700 cursor-pointer">بناطيل</p></div>
        </div>

        
        <div className="bg-[#F6F6F6] my-20 px-12 pd:px-20 lg:px-32 sm:px-20">
      <div className="flex flex-row justify-center my-5">
        <h2 className="text-4xl mb-4"> الأحدث
</h2>
      </div>
      
    <div >
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10"  >
       {suits.map((suit)=>(
        <div className="rounded-lg" key={suit.id} >
          <a href="#">
          <Image 
          src={suit.image} 
          className="max-w-[100%] rounded-tl-lg rounded-tr-lg" 
          alt="d" />
        </a>
        <div className="p-5 text-center">
          <h3><a href="#">
            {suit.title}
          </a></h3>
          <div className="flex justify-center">
            <a 
            className="bg-gradient-to-r from-red-600 to-[#bb0004] rounded-full py-2 px-4
             my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
             onClick={() => handleClick(suit.id)}
             href="#">
              {suit.details}
            </a>
                </div>
                </div>
                </div>

         
       ))}
          </div>

    
      
          {selectedItem && <SkeletonComponent selectedItem={selectedItem} />}

     





           </div>

       

     
    
      </div>
  
    <Footer/>


        </>
    )
};

export default Homee;
