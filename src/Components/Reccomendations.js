import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import './Reccomendations.css'; // Add your custom styling if needed
import BackHomeLink from './BackHomeLink';

// Importing images
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';
import image9 from '../images/image9.png';
import image10 from '../images/image10.png';

function ReccomendationsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imagesCarousel1 = [
    { src: image1, altText: 'Blueberry Salad' },
    { src: image2, altText: 'Pasta with Vegetables' },
    { src: image3, altText: 'Vegetable Soup' },
    { src: image4, altText: 'Fruit Salad' }
  ];

  const imagesCarousel2 = [
    { src: image5, altText: 'Grilled Vegetables' },
    { src: image6, altText: 'Berry Smoothie' },
    { src: image7, altText: 'Vegetable Stir Fry' }
  ];

  const imagesCarousel3 = [
    { src: image8, altText: 'Avocado Toast' },
    { src: image9, altText: 'Roasted Vegetables' },
    { src: image10, altText: 'Berry Bowl' }
  ];

  return (
    <div className="carousel-page">
      <BackHomeLink />
      <h1>Recommended for You</h1> {/* Main Hero Title */}

      <div className="carousel-section">
        <h2>Based on your profile . . .</h2>
        <Slider {...settings}>
          {imagesCarousel1.map((image, index) => (
            <div key={index} className="carousel-item">
              <div className="image-container">
                <img src={image.src} alt={image.altText} />
                <div className="image-overlay">
                  <span>{image.altText}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="carousel-section">
        <h2>Others with similar interests are making . . .</h2>
        <Slider {...settings}>
          {imagesCarousel2.map((image, index) => (
            <div key={index} className="carousel-item">
              <div className="image-container">
                <img src={image.src} alt={image.altText} />
                <div className="image-overlay">
                  <span>{image.altText}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="carousel-section">
        <h2>Feeling adventurous?</h2>
        <Slider {...settings}>
          {imagesCarousel3.map((image, index) => (
            <div key={index} className="carousel-item">
              <div className="image-container">
                <img src={image.src} alt={image.altText} />
                <div className="image-overlay">
                  <span>{image.altText}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ReccomendationsPage;
