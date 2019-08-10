import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import {capitalizeFirst} from '../utils/helperFunctions'

import '../css/Styles.css'


export default class NavBar extends React.Component {
  render() {
		return (
			<div className="NavBar">
				<div className="NavBarRight">
					<NavItem route='/home' routeName={'home'} />
				</div>
				<div className="NavBarRight">
					{this.props.routes.map(e=> <NavItem route={e} routeName={capitalizeFirst(e.replace('/', ''))} />)}
				</div>
			</div>
			)
  }
}

const NavItem = (props) => {
	console.log(props.route)
	return props.route !== '/mapa' 
? <h3><Link className="NavBarLinks" to={props.route}>{props.routeName}</Link></h3>
: <h2><Link className="NavBarLinks" ><FiGlobe/></Link></h2>
}