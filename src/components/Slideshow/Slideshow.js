
import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slideshow.css'

const FadeExample = ({cleaned, order}) => {
  const fadeImages = [
    "https://api.time.com/wp-content/uploads/2021/03/trash-pandemic-covid-19-01.jpg",
    "https://api.time.com/wp-content/uploads/2021/03/trash-pandemic-covid-19-01.jpg",
    "https://api.time.com/wp-content/uploads/2021/03/trash-pandemic-covid-19-01.jpg"
  ];

  return (
      <div className={cleaned ? 'slide-container-two': 'slide-container-one'}>
        <Fade className={order==='first'&&cleaned ? 'grayscale-cleaned': null}>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} alt='img' />
            </div>
            <p></p>
          </div>
          <div className="each-fade">
            <p></p>
            <div>
              <img src={fadeImages[1]} alt='img'/>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} alt='img' />
            </div>
            <p></p>
          </div>
        </Fade>
      </div>
  );
};

export default FadeExample;