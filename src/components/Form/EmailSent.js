import React from "react";
import "./Form.css";
import Fade from "react-reveal/Fade";

class EmailSent extends React.Component {
  render() {
    return (
      <Fade right duration={600} distance='50px'>
        <h1 className='form__title'>Verification email sent</h1>
        <p className='form__subtitle'>
          Go check your email and reset your password please.
        </p>
      </Fade>
    );
  }
}

export default EmailSent;
