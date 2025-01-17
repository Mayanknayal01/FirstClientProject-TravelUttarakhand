// Banner.js
import React from 'react';
import './HomeBanner.css';
import BannerCarousel from './HomeBannerCarousel.jsx';
import { banner_background } from '../../../Assets/Assets.js';

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner_background.banner_bg} alt="banner" className="banner-image" />
            <div className="banner-content">
                <h1>Discover the <span className='highlight'>Beauty of Uttarakhand</span> with Travel_Uttarakhand</h1>
                <p>Your Gateway to Adventure in the <span className='highlight2'>Land of Gods</span></p>
            </div>
            <div className="carousel-container"> {/* Change this to carousel-container */}
                <BannerCarousel />
            </div>
        </div>
    );
};

export default Banner;
