

import Image from 'next/image';
import React from 'react';
const Details= (suit) => {
  return (
    <div>
      <div className='fixed inset-0 bg-black bg-opacity-30 flex z-50 mt-[100px] text-white'>
                <div className='w-[490px] text-black h-full fixed bg-white'>
                  <div className="flex justify-center mt-14">
                    <Image src={suit.image} 
                    className="max-w-[50%] h-[20rem] rounded-tl-lg rounded-tr-lg" alt="d" />
                  </div>

                  <div className="p-4">
                    <h3 className="border-b-2 border-black pb-2"
                    >{suit.title}


                    </h3>
                    <p className="text-right border-b-2 text-gray-600 border-black p-2"
                    >{suit.color}</p>
                    <p className="text-right border-b-2 text-gray-600 border-black p-2"
                    >{suit.size}</p>
                    <p className="text-right border-b-2 text-gray-600 border-black p-2"
                    >{suit.pieces}
                    </p>
                    <p className="text-right border-b-2 text-gray-600 border-black p-2"
                    >{suit.address}</p>
                    
                  </div>


                </div>
              </div>
    </div>
  );
};

export default Details;