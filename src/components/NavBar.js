import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../css/Styles.css'


export default class NavBar extends React.Component {
  render() {
		return (
			<div className="NavBar">
				{this.props.routes.map(e=> <NavItem route={e} routeName={e.replace('/', '').toUpperCase()} />)}
				{/* <NavItem route="./" routeName='About' />
				<NavItem route="./" routeName='Movimientos' />
				<NavItem route="./" routeName='Protagonistas' />
				<NavItem route="./" routeName='Ejes' />
				<NavItem route="./" routeName='Mapa' /> */}
				{/* <h1>About{this.props.name}</h1>
				<h1>Movimientos{this.props.name}</h1>
				<h1>Protagonistas{this.props.name}</h1>
				<h1>Ejes{this.props.name}</h1>
				<h1>Mapa{this.props.name}</h1> */}
			</div>
			)
  }
}

const NavItem = (props) => <h1><Link className="NavBarLinks" to={props.route}>{props.routeName}</Link></h1>