import React from "react"
import Input from "./Input"
import "./Form.css"
import {Link} from "react-router-dom"
import Fade from "react-reveal/Fade"

class SignUpForm extends React.Component{
    render(){
        return(
            <Fade left duration={600} distance="200px">
                <div className="form">
                    <h1 className="form__title">Welcome!</h1>
                    <p className="form__subtitle">Please Sign Up to start making our country green!</p>
                    <Input type="text" name={'username'} placeholder="Name..."/>
                    <Input type="email" name={'email'} placeholder="Email..."/>
                    <Input type="password" name={'password'} placeholder="Password..."/>
                    <Input type="password" name={'confirmPass'} placeholder="Confirm Password..."/>
                    <Input type="button" className={'form__submit'} value="Sign Up"/>
                    <Link to="/signIn" className="form__link">Already signed up?</Link>
                </div>
            </Fade>
        )
    }
}

export default SignUpForm