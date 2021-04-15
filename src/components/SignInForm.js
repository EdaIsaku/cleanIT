import React from "react"
import Input from "./Input"
import {Link} from "react-router-dom"
import Fade from "react-reveal/Fade";
import {auth} from "../../src/firebase"

class SignInForm extends React.Component{
    state = {
        email: "",
        password: ""
    }

handleChange = (ev) => {
    const{name, value} = ev.target;
    this.setState({
        [name]: value
    }, console.log(this.state))
}

handleSubmit = () => {
    const{email, password} =this.state;
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    });
}

    render(){
        return(
            <Fade right duration={600} distance="50px">
                <div className="form">
                    <h1 className="form__title">Welcome!</h1>
                    <p className="form__subtitle">Please Sign In to start making our country green!</p>
                    <Input handleChange={this.handleChange} type="email" name={'email'} placeholder="Email..."/>
                    <Input handleChange={this.handleChange} type="password" name={'password'} placeholder="Password..."/>
                    <Input handleSubmit={this.handleSubmit} type="button" className={'form__submit'} value="Sign In"/>
                    <Link className="form__link" to="/">Don't have an account yet?</Link>
                </div>
            </Fade>
        )
    }
}

export default SignInForm