import React from "react";
import Input from "./Input";
import "./Form.css";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";
import {auth} from "../../src/firebase";
import SignUpSuccess from "./SignUpSuccess"



class SignUpForm extends React.Component{
    state = { 
        username:'',
        email: '',
        password: '',
        confirmPass: '',
        isSignedUp: false,
        errors:{
            username:{
                result:false,
                message:''
            },
            email: {
                result:false,
                message:''
            },
            password:{
                result: false,
                message: ''
            }
        },
        shouldCheckInput: false
    }

    handleChange = (ev) => {
      const {name,value} = ev.target;
      this.setState({
          [name]:value
      })
    }
    
    handleSubmit = () => {
        const{email, password} = this.state
        this.setState({
            shouldCheckInput: true
        })
        this.validateData()
        //#region Make request to Firebase
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            if(user){
                this.setState({
                    isSignedUp: true
                },this.clearState)
                
         }
        })
        .catch((error) => {
           var errorCode = error.code;
           var errorMessage = error.message;
           console.error(errorCode, errorMessage) 
        });
        //#endregion 
        

    }

    clearState = () => {
        this.setState({
            username:'',
            email: '',
            password: '',
            confirmPass: ''
        })
    }

    //TODO Errors and Validation
    validateData = () => {
     const {username, email, password, confirmPass} = this.state
     this.validateEmail(email)
     this.validatePassword(password,confirmPass)
     this.validateUsername(username)

   }

    validateUsername = (username) => {
    const userErrors = []    
    if(username.trim().length < 3){
        userErrors.push('Username is too short or empty!')
        }
    if(!(/^([^0-9]*)$/).test(username)){
        userErrors.push('Username can not contain numbers!')
    }
    if(userErrors.length >0){
        this.setState ( (prevState) => ({
            errors: prevState.errors.concat(userErrors)
        })
        )
        return false
    } else {
       
       this.removeError('username')
        return true
    }
   }

   validateEmail = (email) => {
       const emailErrors = []
       let emailTest= new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
       if(email.trim() < 4){
            emailErrors.push('Email is too short or empty!')
       }

       if(!emailTest.test(email)){
        emailErrors.push('Email is not valid format!')
       }
       if(emailErrors.length > 0){
        this.setState ( (prevState) => ({
            errors: prevState.errors.concat(emailErrors)
            }))
        } else {
             this.removeError('email')
             return true
         }
   }

   validatePassword = (password, confirmPass) => {
    const passwordErrors = []
    if((!password) && (!confirmPass)){
     passwordErrors.push('Password && Confirm Password is required!')
    }
    if(password !== confirmPass) {
     passwordErrors.push("Your password don't match!")
    }

    if(passwordErrors.length > 0){
        this.setState( prevState => {
          return {
               errors: prevState.errors.concat(passwordErrors)
            }
        }
        )
        return false
    } else {
        this.removeError('password')
        return true
    }

}

   checkInput = (input) => {
        const {errors} = this.state;
        const validation = {
            result:'success',
            message:''
        };
        errors.forEach( (el) => {
            if(el.toLowerCase().includes(input)){
                validation['result'] = 'error'
                validation['message'] = el
            }
        })
        return validation;
   }


   removeError = (input) => {
       const {errors} = this.state;
       const filteredErrors = errors.filter(el => (!el.toLowerCase().includes(input)))
       console.log(filteredErrors);
       this.setState({
           errors: filteredErrors
       })
   }


    render(){
        const {username, email, password, confirmPass,isSignedUp,shouldCheckInput} = this.state
        return (
                <Fade left duration={600} distance="50px">
                    <div className="form">
                    {isSignedUp ? (<SignUpSuccess/>) : 
                        (<>
                            <h1 className="form__title">Welcome!</h1>
                            <p className="form__subtitle">Please Sign Up to start making our country green!</p>
                            <Input validation={shouldCheckInput && this.checkInput('username')} value={username}  handleChange={this.handleChange} type="text" name={'username'} placeholder="Name..."/>
                            <Input validation={shouldCheckInput && this.checkInput('email')} value={email} handleChange={this.handleChange} type="email" name={'email'} placeholder="Email..."/>
                            <Input validation={shouldCheckInput && this.checkInput('password')} value={password} handleChange={this.handleChange} type="password" name={'password'} placeholder="Password..."/>
                            <Input validation={shouldCheckInput && this.checkInput('password')} value={confirmPass} handleChange={this.handleChange} type="password" name={'confirmPass'} placeholder="Confirm Password..."/>
                            <Input handleSubmit={this.handleSubmit} type="button" className={'form__submit'} value="Sign Up"/>
                            <Link to="/signIn" className="form__link">Already signed up?</Link>
                        </>)}
                    </div>
                </Fade>
        )
    }
}

export default SignUpForm