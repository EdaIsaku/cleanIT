import React from "react";
import "./Form.css";
import Fade from "react-reveal/Fade";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import EmailSent from "./EmailSent";

class ForgotPassword extends React.Component {
  state = {
    email: "",
    errors: {
      email: {
        result: "",
        message: "",
      },
    },
    shouldCheckInput: false,
    emailSent: false,
  };

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const { email } = this.state;
    this.setState({
      shouldCheckInput: true,
    });
    this.validateData();
    this.forgotPassword(email);
  };

  clearState = () => {
    this.setState({
      email: "",
    });
  };

  validateEmail = (email) => {
    let {
      errors: {
        email: { result, message },
      },
    } = this.state;

    let emailTest = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );

    result = "";
    message = "";

    if (!emailTest.test(email)) {
      result = "error";
      message = "Email is not valid format!";
    }
    if (email.trim().length < 4) {
      result = "error";
      message = "Email is to short!";
    }

    if (result) {
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, email: { result, message } },
      }));
      return false;
    } else {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          email: { result: "success", message: "" },
        },
      }));
      return true;
    }
  };

  validateData = () => {
    const { email } = this.state;
    this.validateEmail(email);
  };

  checkInput = (input) => {
    const { result, message } = this.state.errors[input];
    return { result, message };
  };

  forgotPassword = (mail) => {
    auth
      .sendPasswordResetEmail(mail)
      .then(() =>
        this.setState({
          emailSent: true,
        })
      )
      .catch((error) => {
        let {
          errors: {
            email: { result, message },
          },
        } = this.state;
        if (error) {
          result = "error";
          message = error.message.slice(0, 57);
          this.setState((prevState) => ({
            ...prevState,
            errors: {
              ...prevState.errors,
              email: { result, message },
            },
          }));
          return false;
        } else {
          this.setState((prevState) => ({
            ...prevState,
            errors: {
              ...prevState.errors,
              email: { result: "", message: "" },
            },
          }));
        }
      });
  };

  render() {
    const { shouldCheckInput, emailSent } = this.state;
    return (
      <Fade right duration={600} distance='50px'>
        <div className='form'>
          {emailSent ? (
            <EmailSent />
          ) : (
            <>
              <h1 className='form__title'>Forgot your password?</h1>
              <p className='form__subtitle'>
                Don't worry. . . Just fill in your email <br /> and we'll send
                you a link to reset your password.
              </p>
              <Input
                validation={shouldCheckInput && this.checkInput("email")}
                handleChange={this.handleChange}
                type='email'
                name={"email"}
                placeholder='Email...'
              />
              <Input
                handleSubmit={this.handleSubmit}
                type='button'
                className={"form__submit"}
                value='Reset password'
              />
            </>
          )}
          <Link className='form__link' to='/signIn'>
            Back to Log IN
          </Link>
        </div>
      </Fade>
    );
  }
}

export default ForgotPassword;
