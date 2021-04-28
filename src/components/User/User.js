import React,{useState} from 'react'
import {firebase as db} from '../../firebase'

import './User.css'

function User(){
    return (
    <div className="profile">
        <div className="profile__user">
            <span className="profile__user__letters">KR</span>
        </div>
       <div className='profile__info'>
          <b className="profile__info__username">Kridi Ramilli</b>
          <span className="profile__info__email">kridiramilli@gmail.com</span>
          <input type="button" value='Sign out' name="" className="profile__info__signOut"/>
        </div>

        </div>
    )
}

export default User
