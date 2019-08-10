import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './navigation/routes';
import Navigation from './navigation'
import Home from './home'
import Movimientos from './movimientos'
import Protagonistas from './protagonistas'
import Ejes from './ejes'
import Mapa from './mapa'

function App() {
  return (
		  <Router>
    <div>
      <Navigation />
      <div>
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.MOVIMIENTOS} component={Movimientos} />
      <Route path={ROUTES.PROTAGONISTAS} component={Protagonistas} />
			<Route path={ROUTES.EJES} component={Ejes} />
			<Route path={ROUTES.MAPA} component={Mapa} />

      {/* <Route path="/proposals:id" component={DecisionPage} /> */}
      </div>
    </div>
  </Router>
   
  );
}


export default App;
