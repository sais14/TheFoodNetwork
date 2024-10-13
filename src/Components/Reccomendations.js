
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reccomendations.css'; // Add your custom styling if needed

function ReccomendationsPage() {
  const settings = {
    dots: true, // Shows dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
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
    "https://?",
    "https://?",
    "https://?",
    "https://?",
  ];

  const imagesCarousel2 = [
    "https://?",
    "https://?",
    "https://?",
    "https://?",
  ];

  const imagesCarousel3 = [
    "https://?",
    "https://?",
    "https://?",
    "https://?",
  ];

  return (
    <div className="carousel-page">
      <h2>Based on your profile . . .</h2>
      <Slider {...settings}>
        {imagesCarousel1.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel 1 - Image ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <h2>Others with similar intersts are making . . .</h2>
      <Slider {...settings}>
        {imagesCarousel2.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel 2 - Image ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <h2>Feeling adventurous?</h2>
      <Slider {...settings}>
        {imagesCarousel3.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel 3 - Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReccomendationsPage;
