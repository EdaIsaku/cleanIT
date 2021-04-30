import React, { useContext, useState, useEffect } from "react";
import { auth, firebase as db } from "../../firebase";

import "./User.css";
import { UserContext } from "./UserProvider.js";

function User({ user }) {
  const [initials, setInitials] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  //   if (user && !displayName) {
  //     const { displayName, email } = user;
  //     setDisplayName(displayName);
  //     setEmail(email);
  //   }
  const handleSignOut = () => {
    auth.signOut();
  };

  //   const getInitials = (displayName) => {
  //     const tmp = displayName.split(" ");
  //     let initials = tmp[0][0].toUpperCase() + tmp[1][0].toUpperCase();
  //     setInitials(initials);
  //     return initials;
  //   };
  //   useEffect(() => getInitials(displayName));

  return (
    <div className='profile'>
      <div className='profile__user'>
        <span className='profile__user__letters'>{initials}</span>
      </div>
      <div className='profile__info'>
        <b className='profile__info__username'>{displayName}</b>
        <span className='profile__info__email'>{email}</span>
        <input
          type='button'
          onClick={handleSignOut}
          value='Sign out'
          name=''
          className='profile__info__signOut'
        />
      </div>
    </div>
  );
}

export default User;
