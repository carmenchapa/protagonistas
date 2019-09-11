import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./navigation/routes";
import Navigation from "./navigation";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
import Home from "./home";
import Movimientos from "./movimientos";
import Movimiento from "./movimientos/movimiento";
import Protagonistas from "./protagonistas";
import Protagonista from "./protagonistas/protagonista";
import Ejes from "./ejes";
import Mapa from "./mapa";

function App() {
  // console.log('App', this.context)
  const { pathname } = window.location;
  return (
    <WindowDimensionsProvider>
      <Router>
        <div className="AppContainer">
          <Navigation currentRoute={pathname} />
          <div className="AppContainer">
            <Route exact path={ROUTES.HOME[0]} component={Home} />
            <Route path={ROUTES.MOVIMIENTOS[0]} component={Movimientos} />
            <Route path={ROUTES.PROTAGONISTAS[0]} component={Protagonistas} />
            <Route path={ROUTES.EJES[0]} component={Ejes} />
            <Route path={ROUTES.MAPA[0]} component={Mapa} />
            <Route path={ROUTES.PROTAGONISTA[0]} component={Protagonista} />
            <Route path={ROUTES.MOVIMIENTO[0]} component={Movimiento} />

            {/* <Route path="/proposals:id" component={DecisionPage} /> */}
          </div>
        </div>
      </Router>
    </WindowDimensionsProvider>
  );
}

export default App;
