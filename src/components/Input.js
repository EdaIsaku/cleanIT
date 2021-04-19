import React from "react"
import {FaCheckCircle} from 'react-icons/fa'
import {FaRegTimesCircle} from 'react-icons/fa'

import "./Input.css"

function Input ({type, placeholder, value, className, name, handleChange, handleSubmit,style,validation }){
        
    return(
            <div className={type=='button' ? '':`form__control ${validation.result}`}>
                <input style={style} onChange={handleChange} onClick={handleSubmit} name={name} className={type=='button' ? 'form__submit':'form__input'} type={type} placeholder={placeholder} value={value} />
                {
                type=='button' ? null: ( <>
                <FaRegTimesCircle className="form__control__icons error__icon"/>
                <FaCheckCircle className="form__control__icons success__icon"/>
                <small className="form__control__errorMessage">{`*${validation.message}`}</small>
                </>)
                }
            </div>)
        
}

export default Input