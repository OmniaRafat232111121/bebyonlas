import React from 'react'
import Image from "next/image";
import logo from "../../public/logo.png"
import Link from 'next/link';
import {BiLocationPlus} from 'react-icons/bi'
type Props = {}

const Footer = (props: Props) => {
    const items=[
        {
            id:1,
            title:'المنتجات',
            data:[
                "بدل","قمصان","احذية"
            ]

        },
        {
            id:2,
            title:'تصفح ايضا',
            data:[
                "عن بيبيون","اتصل بنا","معرض الصور","فريق بيبيون","بيبيون والنجوم","مقالات تهمك"
            ]

        },
       
    ]
  return (
    <footer dir="rtl"  className=" p-5  ">
      <div className="pr-8 pl-8 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center text-gray-600  ">
            <a className="text-lg font-bold ">
               <Image src={logo}  width={300} height={200} alt="logo"/>
            </a>
<p>
عن بيبيون براند رائد في تصميم أزياء الرجال بافضل مجموعات بدل في الشرق الأوسط


    </p>          </div>

         
         

     {items.map((item)=>(
        <div className='text-center text-gray-600'>
            <h3 className='inline text-lg font-bold mb-7 border'>{item.title}</h3>
           {item.data.map((dataitem)=>(
            <div>
                <Link href="/">
                
            <a className='block p-2 mt-2' >{dataitem}</a>
            
                </Link>
                </div>
           ))}

            </div>
     ))}
     
     <div className="text-center text-gray-600">
          <h3 className=" inline text-lg font-bold mb-7 border ">
            فروعنا

            </h3>
        
                <a className='flex items-center justify-center p-2 mt-2 '>
                شارع سلطان حسين  الوزير
                <BiLocationPlus className='mr-2'  size={20}  />
                </a>
                <a className='flex items-center justify-center p-2'>
                منطقة سيدي بشر-شارع المسرح
                <BiLocationPlus className='mr-2'  size={20}  />
                </a> 
                 <a className='flex items-center justify-center p-2'>
                  شارع راغب باشا
                <BiLocationPlus className='mr-2'  size={20}  />
                </a>
                <a className='flex items-center justify-center p-2'>
               العمراية شارع الشرقاوي             
               <BiLocationPlus className='mr-2'  size={20}  />
                </a>
           
          </div>  
        </div>
        
      </div>
    </footer>
  )
}

export default Footer