import React from "react"
import Form from "./Form";
import "./SignUp.css"

class SignUp extends React.Component{
   
    render(){
        return(
            <div className="container">
                <h1 className="container__main__text">We don't wanna live in a trash can, <span className="container__main__text-red"> stop making it one!</span></h1>
                <Form />
            </div>
        )
    }
}

export default SignUp