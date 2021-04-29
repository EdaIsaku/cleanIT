
import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slideshow.css'

const FadeExample = ({cleaned, order}) => {
  const fadeImages = [
    "https://api.time.com/wp-content/uploads/2021/03/trash-pandemic-covid-19-01.jpg",
    "https://image.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://api.time.com/wp-content/uploads/2021/03/trash-pandemic-covid-19-01.jpg"
  ];

  return (
      <div className={cleaned ? 'slide-container-two': 'slide-container-one'}>

        <Fade duration={1000}  className={order==='first'&&cleaned ? 'grayscale-cleaned': null}>

          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} alt='img' />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[1]} alt='img'/>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} alt='img' />
            </div>
          </div>
        </Fade>
      </div>
  );
};

export default FadeExample;