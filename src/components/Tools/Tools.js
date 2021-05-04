import { connect } from "react-redux";

import "./Tools.css";
import Tool from "./Tool";
import { addGarbage } from "./../../redux/actions/toolsAction";

function Tools({ addGarbage, addGarbageStatus }) {
  const handleClick = () => {
    addGarbage(!addGarbageStatus);
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
});

const mapStateToProps = (state) => ({
  addGarbageStatus: state.tools.addGarbage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
