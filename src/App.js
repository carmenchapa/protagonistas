import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './navigation/routes';
import Navigation from './navigation'
import Home from './home'
import Movimientos from './movimientos'
import Protagonistas from './protagonistas'
import Protagonista from './protagonistas/protagonista'
import Ejes from './ejes'
import Mapa from './mapa'

function App() {
	// console.log('App', this.context)
	const {pathname} = window.location
  return (
		 <Router>
    <div className="AppContainer">
      <Navigation currentRoute={pathname}/>
      <div className="AppContainer">
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.MOVIMIENTOS} component={Movimientos} />
      <Route path={ROUTES.PROTAGONISTAS} component={Protagonistas} />
			<Route path={ROUTES.EJES} component={Ejes} />
			<Route path={ROUTES.MAPA} component={Mapa} />
			{/* <Route path={ROUTES.MOVIMIENTO} component={Protagonista} /> */}
			<Route path={ROUTES.PROTAGONISTA} component={Protagonista} />

      {/* <Route path="/proposals:id" component={DecisionPage} /> */}
      </div>
    </div>
  </Router>
   
  );
}


export default App;
