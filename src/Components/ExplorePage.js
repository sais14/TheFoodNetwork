import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ExplorePage.css'; // Custom CSS for the image grid

const images = [
  { src: 'https://via.placeholder.com/300?text=Image+1', name: 'Pizza' },
  { src: 'https://via.placeholder.com/300?text=Image+2', name: 'Pav Baji' },
  { src: 'https://via.placeholder.com/300?text=Image+3', name: 'Sushi' },
  { src: 'https://via.placeholder.com/300?text=Image+4', name: 'Other Food' },
  { src: 'https://via.placeholder.com/300?text=Image+5', name: 'Image 5' },
  { src: 'https://via.placeholder.com/300?text=Image+6', name: 'Image 6' },
  { src: 'https://via.placeholder.com/300?text=Image+7', name: 'Image 7' },
  { src: 'https://via.placeholder.com/300?text=Image+8', name: 'Image 8' },
  { src: 'https://via.placeholder.com/300?text=Image+9', name: 'Image 9' },
];

const ExplorePage = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to handle navigation when sparkle emoji is clicked
  const handleSparkleClick = () => {
    navigate('/create'); // Navigate to /create page
  };

  return (
    <div className="explore-page">
      {/* Title */}
      <div className="explore-title">
        <h1>Explore What Others Are Making</h1>
      </div>

      {/* Image gallery */}
      <div className="image-gallery">
        {images.map((image, index) => (
          <div className="image-tile" key={index}>
            <img src={image.src} alt={image.name} />
            {/* Sparkle emoji, clickable to navigate to /create */}
            <div className="image-sparkle" onClick={handleSparkleClick}>
              ✨
            </div>
            <div className="image-name">{image.name}</div> {/* Image name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
