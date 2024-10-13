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

// Image array with routes
const images = [
  { src: AlfredoPasta, name: 'Alfredo Pasta', route: '/recipe/alfredo-pasta' },
  { src: Pav, name: 'Pav Bhaji', route: '/recipe/pav-bhaji' },
  { src: Guacamole, name: 'Guacamole', route: '/recipe/guacamole' },
  { src: Gyoza, name: 'Gyoza', route: '/recipe/gyoza' },
  { src: Kimchi, name: 'Kimchi', route: '/recipe/kimchi' },
  { src: FriedRice, name: 'Fried Rice', route: '/recipe/fried-rice' },
  { src: PaniPuri, name: 'Pani Puri', route: '/recipe/pani-puri' },
  { src: PhadThai, name: 'Phad Thai', route: '/recipe/phad-thai' },
  { src: Tzatziki, name: 'Tzatziki', route: '/recipe/tzatziki' }
];

const ExplorePage = () => {
  const navigate = useNavigate();

  // Dynamic navigation based on clicked image's route
  const handleSparkleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="explore-page">
      <BackHomeLink />
      <div className="explore-title">
        <h1>Explore What Others Are Making</h1>
      </div>

      {/* Wrap image gallery inside a container for white background */}
      <div className="image-gallery-container">
        <div className="image-gallery">
          {images.map((image, index) => (
            <div className="image-tile" key={index}>
              <img src={image.src} alt={image.name} />
              <div
                className="image-sparkle"
                onClick={() => handleSparkleClick(image.route)} // Pass image route to the handler
              >
                ✨
                <div className="create-text">Create</div>
              </div>
              <div className="image-name">{image.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
