import Head from "next/head";
import Carousel from "./carousel/Carousel"
import cImage from ".././public/images/c1.png";
import ccImage from ".././public/images/c2.png";
import c1 from ".././public/images/1.png";
import cs1 from ".././public/images/s/2.png";
import cs2 from ".././public/images/s/3.png";
import cs3 from ".././public/images/s/4.png";
import c2 from ".././public/images/2.png";
import c3 from ".././public/images/3.png";
import c4 from ".././public/images/4.png";
import c5 from ".././public/images/5.png";
import c6 from ".././public/images/6.png";
import c7 from ".././public/images/7.png";
import c8 from ".././public/images/8.png";
import c9 from ".././public/images/9.png";
import mImage from ".././public/images/l1.png";
import mmImage from ".././public/images/l2.png";
import Image from "next/image";
import React, { useState } from 'react';

const Homee = () => {
    const title = 'Test Blog';
    const description = 'Welcome to my Notion Blog.'

    const slides = [
        cImage,
        ccImage,
    ]

    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);



    const handleToggle1 = () => {
      setIsOpen1(!isOpen1);
    };
    const handleToggle2 = () => {
      setIsOpen2(!isOpen2);
    };

    const handleToggle3 = () => {
      setIsOpen3(!isOpen3);
    };
    const data = [
      { src: c1, alt: 'seasonal-capsule-w17', text: 'بدل تركي' },
      { src: c2, alt: 'seasonal-capsule-w17', text: 'بليزر' },
      { src: c3, alt: 'seasonal-capsule-w17', text: 'أزرار' },
      { src: c4, alt: 'seasonal-capsule-w17', text: 'ربطات العنق' },
      { src: c5, alt: 'seasonal-capsule-w17', text: 'الساعات' },
      { src: c6, alt: 'seasonal-capsule-w17', text: 'حزام' },
      { src: c7, alt: 'seasonal-capsule-w17', text: 'حذاء' },
      { src: c8, alt: 'seasonal-capsule-w17', text: 'أطفال' },
      { src: c9, alt: 'seasonal-capsule-w17', text: 'بناطيل' }
    ];
    const data2 = [
      {
        src: cs1,
        alt: 'd',
        text: 'بدلة – سليم فيت – أسود',
      },
      {
        src: cs2,
        alt: 'd',
        text: 'بدلة – سليم فيت – أسود',
      },
      {
        src: cs3,
        alt: 'd',
        text: 'بدلة – سليم فيت – أسود',
      },
      {
        src: cs1,
        alt: 'd',
        text: 'بدلة – سليم فيت – أسود',
      },
      {
        src: cs2,
        alt: 'd',
        text: 'بدلة – سليم فيت – أسود',
      },
      {
        src: cs3,
        alt: 'd',
        text: 'بدلة – سليم فيت – أسود',
      },
    ];
   

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} title={"description"} content={description}/>
                <meta name={"og:title"} title={"og:title"} content={title}/>
                <meta name={"og:description"} title={"og:description"} content={title}/>
            </Head>

            <header dir="rtl" 
            className="bg-white w-full z-[60] fixed top-0 shadow-md		">
          
            <nav className="flex justify-between items-center  mx-auto w-full ">
              


            <div className="text-4xl cursor-pointer z-[100] 
            md:hidden block py-5">
                <button className="text-red-950" 
                onClick={()=>setMenuOpen(!menuOpen)}>

        {menuOpen ?
         <svg className="fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg> :
          
          <svg className="fill-black	" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
          <path fill="#607D8B" d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"></path>
              </svg> }
      </button>

            </div>


            <div>
                <img className="w-[30%] cursor-pointer lg:opacity-100 hidden 
                 lg:block" src="../logo.png" alt="..."/>
                
            </div>
         

       
          
            <div 
            className={`nav-links duration-500 md:static absolute md:opacity-100 opacity-0 
            ${menuOpen ? 'opacity-100 border-t-2	border-black-950 pt-5  lg:border-t-0' : 'opacity-0 '}
             bg-white md:min-h-fit min-h-[60vh] left-0 
             ${menuOpen ? 'top-[80px]' : 'top-[-100%]'} 
             md:w-auto w-full flex items-center px-5  ` }>
             
                <ul className=" w-full flex lg:flex-row md:flex-row flex-col md:items-center justify-center gap-7 ">
                    <li >
                        <a className="pt-2 pb-3 hover:text-[#bb0004] border-[#bb0004] hover:border-y-2" href="#"
                        >الرئيسية
                        </a>
                    </li>
                    <li className="">
                        <a className="pt-2 pb-3 hover:text-[#bb0004] border-[#bb0004] hover:border-y-2" href="#">
                            عن بيبيون
                        </a>
                    </li>
                    <li className="relative">
                        <a className="pt-2 pb-3 hover:text-[#bb0004] border-[#bb0004] hover:border-y-2" href="#"
                        >معرض الصور والفديوهات </a>
                     </li>
                    <li >
                 <div className="align-center justify-between  ">
                    {
  !isOpen1 ? 
  <button className=" absolute left-5"  onClick={handleToggle1}>
  <span> <svg className="block md:hidden lg:hidden"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
          </svg>
          </span>
   </button> : 
   <button className=" absolute left-5 "  onClick={handleToggle1}>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className=" block md:hidden lg:hidden bi bi-dash absolute left-5" viewBox="0 0 16 16">
<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
   </button>

 }
                   <button className="peer py-2 ">
                    
                    
                     <span  className=" flex  hover:text-[#bb0004] border-[#bb0004] hover:border-y-2"> 
                     متنجاتنا  
                     
                     <svg className="w-5 h-5 ml-1 hidden md:block lg:block" fill="currentColor" 
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </span> </button>   
                   
                    <div  className="hidden products absolute peer-hover:md:hidden 
                     flex-col lg:flex-row   lg:peer-hover:flex hover:flex  bg-white drop-shadow-lg ">
                             <a className="px-5 py-3 " href="#">
                                  <img src="../images/2cat.png"  width="300px" className="hidden lg:block"/>
                                </a>
                                <a className="px-5 py-3 " href="#">
                                    <img src="../images/3cat.png"  width="300px" className="hidden lg:block"/>
                                </a>
                                <a className="px-5 py-3 " href="#" >
                                    <img src="../images/4cat.png"  width="300px" className="hidden lg:block"/>
                                </a>
                     </div>
                    
                     </div>    
                     {
                      isOpen1 &&  <div className=" lg:hidden md:hidden flex flex-col bg-white w-full">
                      <a className="px-5 py-3 border-b-2	border-black-950" href="#">  بدل رجالي  </a>
                      <a className="px-5 py-3 border-b-2	border-black-950" href="#" >  بنطلون  </a>
                      <a className="px-5 py-3 border-b-2	border-black-950" href="#" >  بليزر  </a>

                       
                </div>
                     }
                   


                                                   {/*----------------------*/}


                     </li>
                      <li className="relative">
                     <a className="pt-2 pb-3 hover:text-[#bb0004] border-[#bb0004] hover:border-y-2 " href="#"> المدونة </a>
                    </li>
                    
                    <li className="relative ">
                    
                      
                    <div className="align-center justify-between relative">  
                  
                    {
                  !isOpen2 ? 
                  <button className=" absolute left-0"  onClick={handleToggle2}>
                  <span> <svg className="block md:hidden lg:hidden"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                          </svg></span>
                  </button> : 
                  <button className=" absolute left-0 "  onClick={handleToggle2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className=" block md:hidden lg:hidden bi bi-dash absolute left-5" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
                  </button>

                      }
                       <button className="peer  py-2" > 
                       
                       
                       <span className="flex hover:text-[#bb0004] border-[#bb0004] hover:border-y-2">تواصل معنا

                 
                 
                 <svg className="w-5 h-5 ml-1 hidden md:block lg:block" fill="currentColor" viewBox="0 0 20 20" 
                 xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd">
                    </path></svg> 

                    </span> 
                    </button> 


                     <div  className="hidden  lg:absolute  top-27 flex-col  
                     peer-hover:flex hover:flex  bg-white drop-shadow-lg">
                     <a className="px-5 py-3  " href="#">  فروع    </a> 
                     </div>
                     </div>

                     {isOpen2 &&  
                      <div  className="lg:hidden md:hidden flex flex-col bg-white w-full">
                     <a className="px-5 py-3 border-b-2	border-black-950" href="#"> 
                      فروع    </a> 
                      </div>}
                     </li>    


                                {/*----------------------*/}
                     
                   <li className="relative">
                    <div >
                    {
  !isOpen3 ? <button className=" absolute left-0"  
  onClick={handleToggle3}>
  <span className=""> <svg className="block md:hidden lg:hidden"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
          </svg></span>
   </button> : 
   <button className=" absolute left-0 "  onClick={handleToggle3}>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className=" block md:hidden lg:hidden bi bi-dash absolute left-5" viewBox="0 0 16 16">
<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
   </button>

 }
                       <button className="peer  py-2" > 
                       
                       <span className="flex hover:text-[#bb0004] border-[#bb0004] hover:border-y-2 ">العربية  
                      
                       <svg  className="w-5 h-5 ml-1 hidden md:block lg:block" fill="currentColor" 
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg "><path fill-rule="evenodd" 
                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                       clip-rule="evenodd"></path></svg>
                        </span> 
                        
                      </button>  

                   
                    </div> 

                    {
                      isOpen3 &&
                        <div className="lg:hidden md:hidden flex flex-col bg-white w-full ">
                        <a className="px-5 py-3 border-b-2	border-black-950 " href="#">  العربي  </a>
                        <a className="px-5 py-3 border-b-2	border-black-950" href="#" >  ENGLISH  </a>
                         
                  </div> 
                      
                    }
                    </li>
                </ul>
            </div>
            
               
            </nav>     
    </header>
       




       
        </>
    )
};

export default Homee;