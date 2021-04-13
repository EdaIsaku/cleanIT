import React from "react";


class SignUp extends React.Component{
    render(){

        return (
            <div className="container">
                <h1 className="container__text"> </h1>
                <div className='container__form'>
                    <form className="form">
                        <input className="form__input" type="text"/>
                        <input className="form__input" type="password"/>
                        <input className="form__input form__submit" type="submit"/>
                        <p>Sign IN</p>
                    </form>
                </div>
            </div>
        )
    }
}


export default SignUp;