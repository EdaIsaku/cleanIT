import React, {  Component } from "react";
import { auth } from "../../firebase";

import "./User.css";

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
      if(this.props.user){     
        this.setState({
          displayName: this.props.user.displayName,
          email: this.props.user.email,
        },() => this.getInitials(this.state.displayName));
      }
  }

  handleSignOut = () => {
    auth.signOut();
  };

  getInitials = (displayName) => {
    const tmp = displayName.split(" ");
    let initials = tmp[0][0].toUpperCase() + tmp[1][0].toUpperCase();
    this.setState({
      initials
    })
    return initials;
  };

  render() {
      const { displayName, email,initials } = this.state;
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
