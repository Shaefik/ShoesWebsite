import React, { useState, useEffect } from 'react';
import './Banner.css';

const bannerImages = [
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoe-banner-design-template-bd3bd4958353755bd39c54f95b6f7f0a_screen.jpg?ts=1646500087',
  'https://kxadmin.metroshoes.com/banner/1697712543STORY-OF-THE-MONTH_METRO-SHOES_DESKTOP-BANNER.jpg',
];

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); 

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="banner-container">
      {bannerImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          className={index === currentImageIndex ? 'active' : 'inactive'}
        />
      ))}
    </div>
  );
}

export default Banner;
