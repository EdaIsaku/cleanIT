import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase";
import { fromSignUp } from "../../redux/actions/userActions";

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
    if (this.props.user) {
      this.setState(
        {
          displayName: this.props.user.displayName,
          email: this.props.user.email,
        },
        () => this.getInitials(this.state.displayName)
      );
    }
  }

  componentWillUnmount() {
    console.log(this.props);
  }

  handleSignOut = () => {
    this.props.fromSignUp(true);
    auth.signOut();
  };

  getInitials = (displayName) => {
    if (displayName) {
      const userName = displayName.split(" ");
      let [name = "", lname = " "] = userName;
      let initials = name[0].toUpperCase() + lname[0].toUpperCase();
      this.setState({
        initials,
      });
      return initials;
    }
  };

  render() {
    const { displayName, email, initials } = this.state;
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

const mapDispatchToProps = (dispatch) => ({
  fromSignUp: (status) => dispatch(fromSignUp(status)),
});

export default connect(null, mapDispatchToProps)(User);
