import React from "react";
import "./styles.scss";

//Routing
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

// Components
import BubblePage from "./components/BubblePage";
import { Login } from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute patch={"/bubble-page"} component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
