import Head from 'next/head'
import React from 'react'
import Image from "next/image";
import logo from '../../public/logo.png';
import {useState} from 'react'
const Header = () => {
    const title = "Header Home";
    const description = "This is suit store";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isopen1,setIsOpen1]=useState(false);
    const [isopen2,setIsOpen2]=useState(false);
    const [isopen3,setIsOpen3]=useState(false)



    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const handleToggle1=()=>{
        setIsOpen1(!isopen1);
    }

    const handleToggle2=()=>{
        setIsOpen2(!isopen2);
    }
    const handleToggle3=()=>{
        setIsOpen3(!isopen3);
    }
  return (
    <>
   <Head>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
    <header dir="rtl" className='bg-white w-full z-[60] fixed top-0 shadow-md	'>

         <nav className='flex justify-between items-center mx-auto w-full '>

           <div className='text-4xl md:hidden block px-5 '>
           <button className='text-red-900' onClick={toggleMenu}>

{isMenuOpen ? <svg className="fill-black  " xmlns="http://www.w3.org/2000/svg" 
x="0px" y="0px" width="30" 
height="50" viewBox="0 0 50 50">
<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
</svg>:
<svg className="fill-black  	" xmlns="http://www.w3.org/2000/svg"
 x="0px" y="0px" width="70" height="48" viewBox="0 0 48 48">
<path fill="#607D8B" d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"></path>
   </svg>  }
</button>
           </div>
           
            {/*image-logo*/}
             <div>
                <Image 
                className={`lg:block  cursor-pointer ${isMenuOpen ? "block":"hidden" }'`}
                  src={logo}
                   width={150} 
                  height={50} 
                  alt="this is logo"/>
             </div>

                     {/*links*/}
             <div  className={` w-full  px-5 md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden' }
             ${isMenuOpen ? "  bg-white shadow-lg h-screen absolute top-[100%] transition-all duration-100 ease-in-out transform  ":""}`}>

                <ul className='w-full flex lg:flex-row flex-col md:items-center md:justify-center gap-6 '>
                    <li>
                        <a className=' pt-2 pb-3  hover:text-red-500 hover:border-y-2  hover:border-red-500'
                        >الرئيسية</a>
                    </li>
                    <li>
                        <a className=' pt-2 pb-3  hover:text-red-500 hover:border-y-2  hover:border-red-500'
                        >عن بيبيون</a>
                    </li>
                    <li>
                        <a className=' pt-2 pb-3  hover:text-red-500 hover:border-y-2  hover:border-red-500'
                        >معرض الصور والفيديوهات</a>
                    </li>


                    <li>


                    <div className="align-center justify-between  ">
                    {
  !isopen1 ? 
  <button className=" absolute left-10"  onClick={handleToggle1}>
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
                      isopen1 &&  <div className=" lg:hidden md:hidden flex flex-col bg-white w-full">
                      <a className="px-5 py-3 border-b-2	border-black-950" href="#">  بدل رجالي  </a>
                      <a className="px-5 py-3 border-b-2	border-black-950" href="#" >  بنطلون  </a>
                      <a className="px-5 py-3 border-b-2	border-black-950" href="#" >  بليزر  </a>

                       
                </div>
                     }  

                    </li>

                   
                    <li>

                 <div className=' justify-between align-center relative'>
                              {
                  !isopen2 ? 
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
                       
                       
                       <span className="flex hover:text-red-600 border-red-600 hover:border-y-2">تواصل معنا

                 
                 
                 <svg className="w-5 h-5 ml-1 hidden md:block lg:block" fill="currentColor" viewBox="0 0 20 20" 
                 xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd">
                    </path></svg> 

                    </span> 
                    </button> 
  


                                  
                                   <div  className=" hidden  lg:absolute  top-27 flex-col  
                     peer-hover:flex hover:flex  bg-white py-2 drop-shadow-lg">
                     <a className="px-5 py-3  " href="#">  فروع    </a> 
                     </div>

                                   
                                          </div>
                    {isopen2 &&  
                      <div  className="lg:hidden md:hidden flex flex-col bg-white w-full">
                     <a className="px-5 py-3 border-b-2	border-black-950" href="#"> 
                      فروع    </a> 
                      </div>}

                      


                    

                                          
                    </li>
                    
                   

                    <li className="relative">
                    <div >
                    {
  !isopen3 ? <button className=" absolute left-0"  
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
                      <div  className=" hidden  lg:absolute  top-27 flex-col  
                     peer-hover:flex hover:flex  bg-white py-2 drop-shadow-lg">
                     <a className="px-5 py-3  " href="#">  
                     العربية    </a> 
                     <a className="px-5 py-3  " href="#">  
                     English    </a> 
                     </div>

                   
                    </div> 

                    {
                      isopen3 &&
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
}

export default Header
