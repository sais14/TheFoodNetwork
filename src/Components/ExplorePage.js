import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExplorePage.css';
import BackHomeLink from './BackHomeLink';

import AlfredoPasta from '../images/ExploreImages/AlfredoPasta.jpg';
import FriedRice from '../images/ExploreImages/friedrice.jpg';
import Guacamole from '../images/ExploreImages/Guacamole.jpg';
import Gyoza from '../images/ExploreImages/gyoza.jpg';
import Kimchi from '../images/ExploreImages/kimchi.jpg';
import PaniPuri from '../images/ExploreImages/Pani_Puri.png';
import Pav from '../images/ExploreImages/pav.jpg';
import PhadThai from '../images/ExploreImages/phadthai.jpeg';
import Tzatziki from '../images/ExploreImages/Tzatziki.webp';

// Assign different classes to different images to give them varying sizes
const images = [
  { src: AlfredoPasta, name: 'Alfredo Pasta', size: 'wide' },  // This will be wide
  { src: Pav, name: 'Pav Bhaji', size: 'tall' },  // This will be tall
  { src: Guacamole, name: 'Guacamole', size: 'large' },  // This will be large
  { src: Gyoza, name: 'Gyoza' },  // Default size
  { src: Kimchi, name: 'Kimchi' },  // Default size
  { src: FriedRice, name: 'Fried Rice', size: 'wide' },  // Wide
  { src: PaniPuri, name: 'Pani Puri', size: 'tall' },  // Tall
  { src: PhadThai, name: 'Phad Thai' },  // Default size
  { src: Tzatziki, name: 'Tzatziki', size: 'large' }  // Large
];

const ExplorePage = () => {
  const navigate = useNavigate();

  const handleSparkleClick = () => {
    navigate('/create');
  };

  return (
    <div className="explore-page">
      <BackHomeLink />
      <div className="explore-title">
        <h1>Explore What Others Are Making</h1>
      </div>

      <div className="image-gallery">
        {images.map((image, index) => (
          <div className={`image-tile ${image.size}`} key={index}>
            <img src={image.src} alt={image.name} />
            <div className="image-sparkle" onClick={handleSparkleClick}>
              ✨
              <div className="create-text">Create</div> {/* Translucent "Create" text */}
            </div>
            <div className="image-name">{image.name}</div> {/* Image name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
