import React, { useContext, Component } from "react";
import { auth, firebase as db } from "../../firebase";

import "./User.css";
import { UserContext } from "./UserProvider.js";

class User extends Component {
  constructor(props) {
    super();
    this.state = {
      initials: "",
      displayName: "",
      email: "",
    };
  }

  componentDidMount() {
    // this.setState({
    //   displayName: this.props.displayName,
    //   email: this.props.email,
    // });
  }

  handleSignOut = () => {
    auth.signOut();
  };

  getInitials = (displayName) => {
    const tmp = displayName.split(" ");
    let initials = tmp[0][0].toUpperCase() + tmp[1][0].toUpperCase();
    // setInitials(initials);
    return initials;
  };

  render() {
    const { displayName, email } = this.state;

    return (
      <div className='profile'>
        <div className='profile__user'>
          <span className='profile__user__letters'>{""}</span>
        </div>
        <div className='profile__info'>
          <b className='profile__info__username'>{displayName}</b>
          <span className='profile__info__email'>{email}</span>
          <input
            type='button'
            onClick={this.handleSignOut}
            value='Sign out'
            name=''
            className='profile__info__signOut'
          />
        </div>
      </div>
    );
  }
}

export default User;
