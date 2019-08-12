import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {decorate, computed} from "mobx";
import { observer } from "mobx-react"
import { FiGlobe } from "react-icons/fi";
import logo from '../logo.svg'
import {capitalizeFirst} from '../utils/helperFunctions'

import '../css/Styles.css'

// @observer
const NavBar = observer(class NavBar extends React.Component {
  render() {
		console.log('NavBar', window.location.pathname)
		// console.log('current', this.props)
		
		const {pathname} = window.location
		return (
			<div className={`NavBar ${pathname === '/home' ? "NavProtas" : "NavProtas"}`}>
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
})

const Logo = (props) => <NavLink className="NavBarLinks" to={props.route}>{<img className="LogoMenu" width="10%" src={logo} alt="" />}</NavLink>

const NavItem = (props) => <h3><NavLink className="NavBarLinks" activeClassName="ActiveNavBarLinks" to={props.route}>{props.route !== '/mapa' ? props.routeName : <FiGlobe size='1.5em'/>}</NavLink></h3>

decorate(NavBar, {
	pathname: computed
});
export default NavBar