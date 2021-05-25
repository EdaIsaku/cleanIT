import React, { useState } from "react";
import { connect } from "react-redux";

import "./Tools.css";
import Tool from "./Tool";
import { addGarbage } from "./../../redux/actions/toolsAction";
import garbbage from "../../assets/garbbage.png";
import cleaned from "../../assets/cleaned.png";

function Tools({ addGarbage, addGarbageStatus }) {
  const [isClicked, setisClicked] = useState(false);
  const handleClick = () => {
    addGarbage(!addGarbageStatus);
    setisClicked(!isClicked);
  };
  return (
    <div className="tools">
      <Tool handleClick={handleClick} image={garbbage} isClicked={isClicked} />
      <Tool />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addGarbage: (status) => dispatch(addGarbage(status)),
});

const mapStateToProps = (state) => ({
  addGarbageStatus: state.tools.addGarbage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
