import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { MdClose } from 'react-icons/md';
import { StaticImageData } from 'next/image';



const images = [
  {
    original: '/images/s/2.png',
    thumbnail: '/images/s/2.png',
  },
  {
    original: '/images/s/3.png',
    thumbnail: '/images/s/3.png',
  },
  {
    original: '/images/s/4.png',
    thumbnail: '/images/s/4.png',
  },
];

interface SkeletonComponentProps {
  selectedItem: {
    id: number;
    image: StaticImageData;
    title: string;
      color: string;
      size: string;
      pieces: string;
      address: string;
    
  };
}

const MyComponent: React.FC<SkeletonComponentProps> = ({ selectedItem }) => {
  const { id, image, title, color, size, pieces, address } = selectedItem;
  const imageSrc = image.toString();
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  useEffect(() => {
    // Simulating data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  // console.log(isBannerVisible);


  return (

   <>
      {isBannerVisible && (
       <div className= ' fixed  inset-0 bg-black bg-opacity-30 flex z-50 mt-[100px] text-white'>

        <div className='w-[490px] text-black h-full fixed bg-white'>
          <div className='flex justify-center mt-[30px]'>
            <div className='my-custom-gallery'>
              {isLoading ? (
                <div className='h-80 bg-gray-300 animate-pulse'></div>
              ) : (
                <ImageGallery items={images} />
              )}
            </div>
          </div>

          {isLoading ? ( // Render skeleton placeholders when loading
            <div className='mt-1'>
              <div className='h-10 mt-5 bg-gray-300 animate-pulse'></div>
              <div className='h-10 mt-5 bg-gray-300 animate-pulse'></div>
              <div className='h-10 mt-5 bg-gray-300 animate-pulse'></div>
              <div className='h-10 mt-5 bg-gray-300 animate-pulse'></div>
            </div>
          ) : (
            <div className='mt-1'>
              <h3 className='border-b-2 text-center border-black pb-2'>
                {selectedItem.title}
              </h3>
              <div>
                <p className='text-right border-b-2 text-gray-600 border-black p-2'>
                  اللون: {selectedItem.color}
                </p>
                <p className='text-right border-b-2 text-gray-600 border-black p-2'>
                  المقاسات: {selectedItem.size}
                </p>
                <p className='text-right border-b-2 text-gray-600 border-black p-2'>
                  القطع: {selectedItem.pieces}
                </p>
                <p className='text-right border-b-2 text-gray-600 border-black p-2'>
                  متواجد بكثرة في فرع: {selectedItem.address}
                </p>
              </div>
            </div>
          )}

         

          <div >
              <button
                className='absolute top-[50px] right-2 bg-red-700 rounded-md border-0 text-white text-3xl cursor-pointer focus:outline-none'
                onClick={closeBanner}
                title='Close'
                aria-label='Close'
              >
                <MdClose className=' h-8 w-8' />
              </button>
            </div>
        </div>
        </div>
      )}
    
   </>
  );
};

export default MyComponent;

