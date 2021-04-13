import React from "react"
import Input from "./Input"
import {Link} from "react-router-dom"

class SignInForm extends React.Component{
    render(){
        return(
            <div className="form">
                <h1 className="form__title">Welcome!</h1>
                <p className="form__subtitle">Please Sign In to start making our country green!</p>
                <Input type="email" name={'email'} placeholder="Email..."/>
                <Input type="password" name={'password'} placeholder="Password..."/>
                <Input type="button" className={'form__submit'} value="Sign In"/>
                <Link className="form__link" to="/">Don't have an account yet?</Link>
            </div>
        )
    }
}

export default SignInForm