import React from "react";
import SignUpForm from "../../components/Form/SignUpForm";
import SignInForm from "../../components/Form/SignInForm";
import ForgotPassword from "../../components/Form/ForgotPassword";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./LogIn.css";

class LogIn extends React.Component {
  render() {
    return (

      <div className='container'>
        <h1 className='container__main__text'>
          We don't wanna live in a trash can,{" "}
          <span className='container__main__text-red'>
            {" "}
            stop making it one!
          </span>
        </h1>
        {
          <Router>
            <Switch>
              <Route exact path='/'>
                <SignInForm />
              </Route>
              <Route exact path='/signIn'>
                <SignInForm />
              </Route>
              <Route exact path='/signUp'>
                <SignUpForm />
              </Route>
              <Route exact path='/forgotPassword'>
                <ForgotPassword />
              </Route>
            </Switch>
          </Router>
        }
      </div>
    );
  }
}

export default LogIn;
