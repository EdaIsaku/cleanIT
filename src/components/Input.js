import React from "react"
import "./Input.css"

function Input ({type, placeholder, value, className, name, handleChange, handleSubmit }){
        return(
            <input onChange={handleChange} onClick={handleSubmit} name={name} className={className || "form__input"} type={type} placeholder={placeholder} value={value} />
        )
}

export default Input