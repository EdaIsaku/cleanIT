import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import LogIn from "./screens/LogIn/LogIn.js";
import Main from "./screens/Main/Main";
import { auth } from "./firebase";

import "./App.css";
import { setCurrentUser } from "./redux/actions/userActions.js";

class App extends Component {
  unsubscribeAuthListener = null;
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.unsubscribeAuthListener = auth.onAuthStateChanged((user) => {
      // this.setState({currentUser:user})
      this.props.setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuthListener();
  }

  render() {
    const { currentUser, fromSignUp } = this.props;
    console.log("These are props", this.props);
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path='/'>
              {currentUser && !fromSignUp ? (
                <Main user={currentUser} />
              ) : (
                <LogIn />
              )}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUser: state.user.currentUser,
    fromSignUp: state.user.fromSignUp,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
