import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PhoneScreenshotSlider = ({ screenshots, appId, appName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    prevArrow: false,
    nextArrow: false,
    dots: false,
  };

  return (
    <div className="phone-slider-wrapper">
      <div className="phone-frame">
        <div className="phone-screen">
          <Slider {...sliderSettings}>
            {screenshots.map((screenshot, index) => (
              <div key={index} className="screenshot-slide">
                <img 
                  src={`/apps/${appId}/${screenshot}`} 
                  alt={`${appName} Screenshot ${index + 1}`}
                  onError={(e) => {
                    e.target.src = '/placeholder-screenshot.png';
                    e.target.alt = 'Screenshot unavailable';
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slide-indicator">
          {currentSlide + 1} / {screenshots.length}
        </div>
      </div>
    </div>
  );
};

export default PhoneScreenshotSlider;