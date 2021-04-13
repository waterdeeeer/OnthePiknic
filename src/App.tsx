import React from 'react';

import LandingPage from './pages/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<LandingPage></LandingPage>
				</Route>
				<Route path="/home">
					<Home></Home>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
