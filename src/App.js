import {BrowserRouter as Router, Switch, Route,Link,Redirect} from "react-router-dom";


import LogIn from "./screens/LogIn/LogIn.js"
import Main from "./screens/Main/Main"

import './App.css'

function App(props) {
  const user = props.user || false
  return (
    <div className="App">
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
      <Route exact path="/">
            {user ? <Redirect to="/app" /> : <LogIn />}
        </Route>
        <Route exact path="/app">  
                <Main />
          </Route>
     </Router>

    </div>
  );
}

export default App;
