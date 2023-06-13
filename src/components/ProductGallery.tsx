import React from 'react';
import ImageGallery from 'react-image-gallery';

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

const ProductGallery = () => {
  return (
    <div className="product-gallery">
            <div className="product-gallery mx-auto max-w-5xl">
      <ImageGallery
        items={images}
        
      />
    </div>
    </div>
  );
};

export default ProductGallery;
