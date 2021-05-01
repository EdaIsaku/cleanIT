import React, { Component, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Map from "../../components/Map/Map";
import User from "../../components/User/User";
import Tools from "../../components/Tools/Tools";
import { UserContext } from "../../components/User/UserProvider.js";

import "./Main.css";

function Main({ user, history }) {
  useEffect(() =>
    setTimeout(() => {
      if (!user) {
        history.push("/");
      }
    }, 1000)
  );

  console.log(user);

  return (
    <div className='main'>
      <User />
      <Tools />
      <Map />
    </div>
  );
}

export default withRouter(Main);
