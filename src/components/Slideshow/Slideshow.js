
import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slideshow.css'

const FadeExample = ({cleaned}) => {
  const fadeImages = [
    "https://image.flaticon.com/icons/png/512/532/532755.png",
    "https://image.flaticon.com/icons/png/512/532/532755.png",
    "https://image.flaticon.com/icons/png/512/532/532755.png"
  ];

  return (
      <div className={cleaned ? 'slide-container-two': 'slide-container-one'}>
        <Fade>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} alt='img' />
            </div>
            <p>First Slide</p>
          </div>
          <div className="each-fade">
            <p>Second Slide</p>
            <div>
              <img src={fadeImages[1]} alt='img'/>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} alt='img'/>
            </div>
            <p>Third Slide</p>
          </div>
        </Fade>
      </div>
  );
};

export default FadeExample;