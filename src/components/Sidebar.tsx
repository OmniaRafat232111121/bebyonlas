import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Tabs from './Tab';
import Tab from './Tab';
import { FiX } from 'react-icons/fi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(true);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    

  return (
    <div  dir="rtl" id="sidebar" className= {`lg:bg-gray-200  
     px-5 py-8 flex lg:flex-col lg:items-start  md:flex md:flex-row   h-full `}>

      <div >
              <h2 className="text-xl font-bold mb-4 text-red-700  ">تفاصيل</h2>

        <div className='bg-white p-[20px]  w-[500px] rounded-lg flex justify-between md:w-full'>
            
            <div>
            <h2 className="text-2xl font-bold mb-4">بدلة فيت  اسود</h2>
            <p className="text-lg">تصميم أنيق ومريح للمناسبات والافراح.</p>
            <div className="border-b-2 mt-4  border-solid border-gray-300"></div>
           
            </div>
            <div>
            <FaHeart size={20}/>
            </div>


        </div>
        
              <Tab
        icon={<FiX />}
        title="وصف"
        color="اسود"
        size="يوجد جميع المقاسات مع امكانية تفصيل البدلة"
        pieces='القطع : بليزر + بنطلون + قميص'
        address='متواجد بكثرة في فرع: متواجد بكثرة في فرع : 33 شارع الأسكندرية'

        des=""



      />
        <Tab
        icon={<FiX />}
        title="التسليم والارجاع والاستبدال"
        des='إذا لم تكن راضيًا عن منتج اشتريته ، يمكنك إعادته خلال 30 يومًا بموجب ضمان العلامة التجارية لشركة بيبيون'
        color=""
        pieces={""}
        address={""}
        size={""}
        



      />
            
         
      </div>
      
    </div>
  );
};

export default Sidebar
