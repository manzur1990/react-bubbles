import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BubblePage from './components/BubblePage';
import Login from './components/Login';

import './styles.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/bubble-page" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;