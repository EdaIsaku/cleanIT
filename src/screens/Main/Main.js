import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import Map from "../../components/Map/Map";
import User from "../../components/User/User";
import Tools from "../../components/Tools/Tools";
import Modal from "../../components/Modal/Modal";

import "./Main.css";

function Main({ user, history, showModal }) {
  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        history.push("/");
      }
    }, 1000);
    console.log(showModal);
  }, [showModal]);

  return (
    <div className='main'>
      <User user={user} />
      <Tools />
      <Map />
      {showModal && <Modal />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  showModal: state.tools.showModal,
});

export default compose(withRouter, connect(mapStateToProps))(Main);
