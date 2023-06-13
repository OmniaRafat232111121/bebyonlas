
import React, { useEffect, useRef, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import {AiOutlineClose} from 'react-icons/ai'
import Sidebar from '../components/Sidebar';
const Details: React.FC = ({}) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToFooter, setIsScrolledToFooter] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerPosition = footerRef.current.getBoundingClientRect().bottom;
        const windowScrollPosition = window.scrollY;
        setIsScrolledToFooter(windowScrollPosition >= footerPosition);
      }
    };
    console.log(isScrolledToFooter)

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [isScrolledToFooter]);

  // const footerstyle = isScrolledToFooter  ? 'relative  ' : 'fixed ';
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
    {
      original: '/images/s/3.png',
      thumbnail: '/images/s/3.png',
    },
    {
      original: '/images/s/4.png',
      thumbnail: '/images/s/4.png',
    },
  ];

  const openSlider = (index: number) => {
    setIsSliderOpen(true);
    setSliderIndex(index);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
    setSliderIndex(0);
  };

  
  const CustomCloseButton = () => {
    return (
      <button className="custom-close-button" onClick={closeSlider}>
       <AiOutlineClose size={25}/>
      </button>
    );
  };


  return (
    <div className=" w-full sm:mt-28 mt-24 relative  ">
     

      <div className="w-full md:w-2/3 float-right relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 my-4" ref={footerRef} >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full  cursor-pointer"
              onClick={() => openSlider(index)}
            >
              <img className='w-[90%]' src={image.thumbnail} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={`w-full md:w-1/3 float-right ${isScrolledToFooter ? "relative top-[260px]": "fixed"} `}  >
       <Sidebar/>
      </div>
      <div className='clear-both'></div>
      {isSliderOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-[100]">
        <div className="max-w-4xl mx-auto my-20">
            <ReactImageGallery
              items={images}
              startIndex={sliderIndex}
              showBullets={true}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={true}
              renderCustomControls={CustomCloseButton} // Render custom close button
            />
          </div>
        </div>
      )}
   
    </div>
  );
};

export default Details;
