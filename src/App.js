import {
  MemoryRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import LogIn from "./screens/LogIn/LogIn.js";
import Main from "./screens/Main/Main";
import SignIn from "./components/Form/SignInForm";

import "./App.css";
import { UserContext } from "./components/User/UserProvider.js";
import { useContext } from "react";

function App(props) {
  const user = useContext(UserContext);

  const isUserSignedUp = (user) => {
    if (!user) {
      return null;
    }
    if (user.metadata.creationTime !== user.metadata.lastSignInTime) {
      return true;
    }
  };

  return (
    <div className='App'>
      {/* <Router>
        <Switch>
        <Route exact path="/">  
              <LogIn />
          </Route>
          <Route exact path="/app">  
              <Main />
        </Route>
        </Switch>
     </Router> */}
      <Router>
        <Route exact path='/'>
          {isUserSignedUp(user) ? <Redirect to='/app' /> : <LogIn />}
        </Route>
        <Route exact path='/app'>
          <Main user={user} />
        </Route>
        <Route exact path='/signIn'>
          <SignIn />
        </Route>
      </Router>
    </div>
  );
}

export default App;
