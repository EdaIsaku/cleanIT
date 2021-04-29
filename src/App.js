import {
  MemoryRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import LogIn from "./screens/LogIn/LogIn.js";
import Main from "./screens/Main/Main";

import "./App.css";
import { UserContext } from "./components/User/UserProvider.js";
import { useContext } from "react";

function App(props) {
  const user = useContext(UserContext);

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
          {user ? <Redirect to='/app' /> : <LogIn />}
        </Route>
        <Route exact path='/app'>
          <Main user={user} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
