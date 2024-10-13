import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ExplorePage.css'; // Custom CSS for the image grid

import AlfredoPasta from '../images/ExploreImages/AlfredoPasta.jpg';
import FriedRice from '../images/ExploreImages/friedrice.jpg';
import Guacamole from '../images/ExploreImages/Guacamole.jpg';
import Gyoza from '../images/ExploreImages/gyoza.jpg';
import Kimchi from '../images/ExploreImages/kimchi.jpg';
import PaniPuri from '../images/ExploreImages/Pani_Puri.png';
import Pav from '../images/ExploreImages/pav.jpg';
import PhadThai from '../images/ExploreImages/phadthai.jpeg';
import Tzatziki from '../images/ExploreImages/Tzatziki.webp';


const images = [
  { src: AlfredoPasta, name: 'Alfredo Pasta' },
  { src: Pav, name: 'Pav Bhaji' },
  { src: Guacamole, name: 'Guacamole' },
  { src: Gyoza, name: 'Gyoza' },
  { src: Kimchi, name: 'Kimchi' },
  { src: FriedRice, name: 'Fried Rice' },
  { src: PaniPuri, name: 'Pani Puri' },
  { src: PhadThai, name: 'Phad Thai' },
  { src: Tzatziki, name: 'Tzatziki' }
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
