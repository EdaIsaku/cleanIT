import React from "react"
import { FaCheck } from 'react-icons/fa'
import Input from "../Input/Input"
import "./SignUpSuccess.css"
import {Link} from "react-router-dom"

class SignUpSuccess extends React.Component{
    render(){

        return(
           <div className="signedUp">
               <FaCheck className="signedUp__icon"/>
               <h1 className="signedUp__title">Signed Up successfully!</h1>
               <p className="signedUp__subtitle">You're ready to give your help!</p>
               <Link to="/signIn">  
                   <Input className="signedUp__button" type="button" value="Log me In!"/>
                   </Link> 
           </div>
            )
    }
}

export default SignUpSuccess
