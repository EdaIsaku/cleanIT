import React from "react";
import { Fade } from "react-slideshow-image";
import { connect } from "react-redux";
import { showModal } from "../../redux/actions/toolsAction";
import { displayUserName } from "./../../utils/index";

import "./Slideshow.css";

const Slideshow = ({ cleaned, order, showModal, currentUser }) => {
  const images = [
    "https://api.time.com/wp-content/uploads/2021/03/trash-pandemic-covid-19-01.jpg",
    "https://image.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://api.time.com/wp-content/uploads/2021/03/trash-pandemic-covid-19-01.jpg",
  ];

  function handleButtonClick() {
    showModal(true);
  }

  return (
    <div className={cleaned ? "slide-container-two" : "slide-container-one"}>
      <Fade
        duration={1000}
        className={order === "first" && cleaned ? "grayscale-cleaned" : null}
      >
        {images.map((el) => {
          return (
            <>
              <div className='each-fade'>
                <div className='image-container'>
                  <img src={el} alt='img' />
                </div>
              </div>
              <div className='image-info'>
                <p className='image-author'>
                  Reported by {currentUser && displayUserName(currentUser)}{" "}
                </p>
                <button className='image-edit' onClick={handleButtonClick}>
                  Edit
                </button>
              </div>
            </>
          );
        })}
      </Fade>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (status) => dispatch(showModal(status)),
});

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

//TODO

// FadeExample.propTypes = {
//   cleaned: PropTypes.string,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);
