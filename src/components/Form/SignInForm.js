import React from "react";
import Input from "../Input/Input";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";
import {auth} from "../../firebase";
import {withRouter} from "react-router-dom";

class SignInForm extends React.Component{
    state = {
        email: "",
        password: "",
        errors:{
            email:{
                result: "",
                message: ""
            },
            password:{
                result: "",
                message: ""
            }
        }, shouldCheckInput: false
    }

handleChange = (ev) => {
    const{name, value} = ev.target;
    this.setState({
        [name]: value
    })
}

handleSubmit = () => {
    const{email, password} =this.state;
    this.setState({
        shouldCheckInput: true
    })
    this.validateData()
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
       
        if(user){
            this.props.history.push('/app');
      }
    
    })
    .catch((error) => {
        let {errors:{
            password:{
                result,
                message
            }
        }} = this.state
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode){
          result= 'error'
          message = errorMessage
        this.setState(prevState => (
            {
                ...prevState, errors:{...prevState.errors,password:{result, message}}
            }
        ))
        return false
    } else {
        this.setState(prevState => (
            {
                ...prevState, errors:{...prevState.errors,password:{result:'', message:''}}
            }
        ))
    }
    });
}

clearState = () => {
    this.setState({
        email: "",
        password: ""
    })
}

validateEmail = (email) => {
    let {errors: {
        email:{
            result,
            message
        }
    }} = this.state

    let emailTest= new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)

    result = "";
    message = "";
    
    if(!emailTest.test(email)){
        result = "error"
        message = "Email is not valid format!"
    }
    if(email.trim().length < 4){
        result = "error"
        message = "Email is to short!"
    }

    if(result){
        this.setState(prevState => (
            {
                ...prevState,errors:{...prevState.errors,email:{result,message}}
            }
        ))
        return false
    } else {
        this.setState(prevState => (
            {
                ...prevState,errors:{...prevState.errors,email:{result:"success", message:""}}
            }
        ))
        return true
    }
}

validatePassword = () => {
    const {password} = this.state
    let {errors:{
        password:{
            result,
            message
        }
    }} = this.state

    result = '';
    message = '';

    if(password.length < 1){
        result = "error"
        message = "Please fill in your Password"
    } 

    if(result){
        this.setState(prevState => (
            {
                ...prevState, errors:{...prevState.errors,password:{result, message}}
            }
        ))
        return false
    } else {
        this.setState(prevState => (
            {
                ...prevState, errors:{...prevState.errors,password:{result:'', message:''}}
            }
        ))
    }
}

validateData = () => {
    const {email, password} = this.state
    this.validateEmail(email)
    this.validatePassword(password)
}

checkInput = (input) => {
    const {result, message} = this.state.errors[input]
    return {result, message}
}

    render(){
        const {shouldCheckInput} = this.state
        return(
            <Fade right duration={600} distance="50px">
                <div className="form">
                    <h1 className="form__title">Welcome!</h1>
                    <p className="form__subtitle">Please <span className="form__subtitle-red">Sign In</span> to start making our country green!</p>
                    <Input validation={shouldCheckInput && this.checkInput("email")} handleChange={this.handleChange} type="email" name={'email'} placeholder="Email..."/>
                    <Input validation={shouldCheckInput && this.checkInput("password")} handleChange={this.handleChange} type="password" name={'password'} placeholder="Password..."/> 
                    <Input handleSubmit={this.handleSubmit} type="button" className={'form__submit'} value="Sign In"/> 
                    <Link className="form__link" to="/">Don't have an account yet?</Link>
                </div>
            </Fade>
        )
    }
}

export default withRouter(SignInForm)