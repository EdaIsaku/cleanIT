import React from "react"
import Input from "./Input"
import "./Form.css"

class Form extends React.Component{
    render(){
        return(
            <div className="form">
                <Input type="text" name={'username'} placeholder="Name..."/>
                <Input type="email" name={'email'} placeholder="Email..."/>
                <Input type="password" name={'password'} placeholder="Password..."/>
                <Input type="password" name={'confirmPass'} placeholder="Confirm Password..."/>
                <Input type="button" className={'form__submit'} value="Sign Up"/>
            </div>
        )
    }
}

export default Form