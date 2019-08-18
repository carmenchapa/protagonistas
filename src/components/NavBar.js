import React from 'react';
import { NavLink } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import {MdNaturePeople, MdZoomOutMap, MdPeople, MdMoreHoriz} from "react-icons/md";
import logo from '../logo.svg'
import {capitalizeFirst} from '../utils/helperFunctions'

import '../css/Styles.css'

// @observer
const NavBar = class NavBar extends React.Component {
  render() {
		console.log('NavBar', window.location.pathname)
		// console.log('current', this.props)
		
		const {pathname} = window.location
		return (
			<div className={`NavBar ${pathname === '/' ? "NavProtas" : "NavProtas"}`}>
				<div className="NavBarRight">
				<Logo route='/' to='/' />
				</div>
				<div className="NavBarRight">
					{this.props.routes.filter(e => e[1] !== 'HOME').map((e, i) => <NavItem key={i} route={e[0]} routeName={capitalizeFirst(e[1].replace('/', ''))} />)}
				</div>
			</div>
			)
  }
}

const Logo = (props) => <NavLink to={props.route}>{<img className="LogoMenu" width="10%" src={logo} alt="" />}</NavLink>

const NavItem = (props) => <h3><NavLink className="NavBarLinks" activeClassName="ActiveNavBarLinks" to={props.route}>{props.route !== '/mapa' ? <IconLink name={props.routeName} />: <FiGlobe size='1.5em'/>}</NavLink></h3>

const IconLink = (props) => {
	console.log(props.name)
	const extraProps = {className:"NavBarIcon", size:'1.2em'}
return<div 
style={{display: 'flex', alignItems: 'center'}}
>
{
	props.name === 'Protagonistas' ?
<MdPeople {...extraProps} />
: props.name === 'Movimientos' ?
<MdNaturePeople {...extraProps} />
: props.name === 'Ejes' ?
<MdZoomOutMap {...extraProps} />
: <MdMoreHoriz {...extraProps} />
}
{props.name}</div>
}

export default NavBar