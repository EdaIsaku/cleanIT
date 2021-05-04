import { connect } from "react-redux";

import "./Tools.css";
import Tool from "./Tool";
import { addGarbage } from "./../../redux/actions/toolsAction";
import {addStyle} from "./../../redux/actions/toolsAction"

function Tools({ addGarbage, addGarbageStatus, addStyle }) {

  const handleClick = () => {
    addGarbage(!addGarbageStatus);
    addStyle(addGarbageStatus===true ? "pointer" : "crosshair")
  };
  return (
    <div className='tools'>
      <Tool handleClick={handleClick} />
      <Tool />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addGarbage: (status) => dispatch(addGarbage(status)),
  addStyle: (change) => dispatch(addStyle(change)),
});

const mapStateToProps = (state) => ({
  addGarbageStatus: state.tools.addGarbage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
