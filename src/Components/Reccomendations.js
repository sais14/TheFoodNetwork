import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

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
import image15 from '../images/image15.png';
import image16 from '../images/image16.png';
import image18 from '../images/image18.png';
import image19 from '../images/image19.png';
import image20 from '../images/image20.png';


function ReccomendationsPage() {
  const navigate = useNavigate(); 

  const handleImageClick = () => {
    navigate('/recipe/bowl'); // Navigate to the provided link if it exists
  };
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
    { src: image1, altText: 'Indian Style Egg Curry' },
    { src: image2, altText: 'Italian Style Vegetable Stir Fry' },
    { src: image3, altText: 'Blueberry and Apple Salad with Lemon Dressing' },
    { src: image4, altText: 'Roasted Vegetable and Mushroom Risotto' },
    { src: image5, altText: 'Asparagus and Red Bell Pepper Fritatta' },
  ];

  const imagesCarousel2 = [
    { src: image6, altText: 'Vegan Quinoa Bowl with Roasted Vegetables' },
    { src: image7, altText: 'Gluten Free Avocado and Blackberry Smoothie' },
    { src: image8, altText: 'Grilled Vegetable Skewers with Hummus Dip' },
    { src: image9, altText: 'Spicy Asparagus Mushroom Stir Fry' },
    { src: image10, altText: 'Carrot Celery Salad with Lemon Juice Dressing' }
  ];

  const imagesCarousel3 = [
    { src: image16, altText: 'Grilled Shrimp Tacos' },
    { src: image18, altText: 'Chicken Stir Fry with Coconut Milk' },
    { src: image19, altText: 'Tofu Broccoli Stir Fry' },
    { src: image20, altText: 'Feta and Chicken Salad' },
    { src: image15, altText: 'Ham and Cheddar Cheese Omelette' },
  ];

  return (
    <div className="carousel-page">
      <BackHomeLink />
      <h7 style={{ color: 'black' }}>Recommended for You</h7> {/* Main Hero Title */}

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
            <div key={index} className="carousel-item" onClick={() => handleImageClick(image.link)}>
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
