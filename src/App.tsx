import React from 'react';

import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
