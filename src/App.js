import { Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import {connect} from 'react-redux'

import LogIn from "./screens/LogIn/LogIn.js";
import Main from "./screens/Main/Main";
import SignIn from "./components/Form/SignInForm";
import {auth} from './firebase'

import "./App.css";
import {setCurrentUser} from "./redux/actions/userActions.js";


class App extends Component {
  unsubscribeAuthListener = null
  state = {
    currentUser: null
  }
  
  componentDidMount(){
    this.unsubscribeAuthListener = auth.onAuthStateChanged( user => {   
      // this.setState({currentUser:user})
      this.props.setCurrentUser(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuthListener()
  }


  render(){
    const {currentUser,fromSignUp} = this.props
    console.log('These are props',this.props)
    return (
      <div className='App'>
        <Router>
          <Route exact path='/'>
            {currentUser && !fromSignUp ? <Redirect to='/app' /> : <LogIn/> }
          </Route>
          <Route exact path='/app'>
            <Main user={currentUser} />
          </Route>
          <Route exact path='/login'>
            <LogIn />
          </Route>
        </Router>
      </div>
    );
  }
  
}


const mapDispatchToProps = (dispatch) => ({
      setCurrentUser: (user) => dispatch(setCurrentUser(user)) 
})

const mapStateToProps = (state) =>({
  currentUser: state.currentUser,
  fromSignUp: state.fromSignUp
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
