import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import logo from '../logo.svg'
import {capitalizeFirst} from '../utils/helperFunctions'

import '../css/Styles.css'


export default class NavBar extends React.Component {
  render() {
		return (
			<div className="NavBar">
				<div className="NavBarRight">
				<Logo route='/home' />
					{/* <NavItem route='/home' routeName={<Logo />} /> */}
				</div>
				<div className="NavBarRight">
					{this.props.routes.filter(e => e !== '/home').map(e=> <NavItem route={e} routeName={capitalizeFirst(e.replace('/', ''))} />)}
				</div>
			</div>
			)
  }
}

const Logo = (props) => <Link className="NavBarLinks" to={props.route}>{<img className="LogoMenu" width="10%" src={logo} alt="" />}</Link>

const NavItem = (props) => <h3><Link className="NavBarLinks" to={props.route}>{props.route !== '/mapa' ? props.routeName : <FiGlobe size='1.5em'/>}</Link></h3>
