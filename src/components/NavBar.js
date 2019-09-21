import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ResponsiveLayout from './ResponsiveLayout'
import { useWindowDimensions } from './WindowDimensionsProvider'
import { FiGlobe } from 'react-icons/fi'
import { MdMenu, MdNaturePeople, MdZoomOutMap, MdPeople, MdMoreHoriz } from 'react-icons/md'
import logo from '../logo.svg'
import { capitalizeFirst } from '../utils/helperFunctions'

const NavBar = class NavBar extends React.Component {
  render() {
    console.log('NavBar', window.location.pathname)
    return <ResponsiveLayout breakPoint={800} renderDesktop={() => <NavBarDesktop routes={this.props.routes} />} renderMobile={() => <NavBarMobile routes={this.props.routes} />} />
  }
}

const NavBarDesktop = props => {
  const { width } = useWindowDimensions()
  const big = width > 1300
  const medium = width > 1000 || width < 1300
  return (
    <div className={`NavBar ${window.location.pathname === '/' ? 'NavProtas' : 'NavProtas'}`}>
      <div className='NavBarRight'>
        <Logo route='/' to='/' />
      </div>
      <div className='NavBarRight' style={{ flex: big ? 1 : medium ? 2 : 3 }}>
        {props.routes
          .filter(e => e[1] !== 'HOME')
          .map((e, i) => (
            <NavItem key={i} route={e[0]} routeName={capitalizeFirst(e[1].replace('/', ''))} onClick={() => {}} />
          ))}
      </div>
    </div>
  )
}

class NavBarMobile extends React.Component {
  state = {
    open: false,
    toggle: false
  }

  closeDrawer = () => {
    console.log('in click drawer')
    this.setState({ open: false })
  }
  render() {
    const drawerStyle = {
      marginRight: this.state.toggle ? '100vw' : null,
      transition: 'margin .5s'
    }
    // const [open, clickDrawer] = useState(false)
    console.log('open', this.state.open)
    return (
      <div className={`NavBar NavBarMobile ${window.location.pathname === '/' ? 'NavProtas' : 'NavProtas'}`}>
        <div className='NavBarRight'>
          <Logo route='/' to='/' />
        </div>

        <MdMenu className='NavBarLinks' size='1.6em' style={{ paddingRight: '4vw' }} onClick={() => this.setState({ open: !this.state.open })} />
        {this.state.open && (
          <div className='MobileMenuOpen' style={{ paddingLeft: '4vw' }}>
            <MdMenu className='NavBarLinks' size='1.6em' style={{ alignSelf: 'flex-end', paddingRight: '4vw' }} onClick={() => this.setState({ open: !this.state.open })} />
            {this.props.routes
              .filter(e => e[1] !== 'HOME')
              .map((e, i) => (
                <NavItem key={i} route={e[0]} onClick={() => this.closeDrawer()} routeName={capitalizeFirst(e[1].replace('/', ''))} />
              ))}
          </div>
        )}
      </div>
    )
  }
}

const Logo = props => <NavLink to={props.route}>{<img className='LogoMenu' width={useWindowDimensions().width > 800 ? 50 : 40} src={logo} alt='' />}</NavLink>

const NavItem = props => (
  <h3>
    <NavLink className='NavBarLinks' activeClassName='ActiveNavBarLinks' to={props.route} onClick={() => props.onClick()}>
      {props.route !== '/mapa' ? <IconLink name={props.routeName} /> : <FiGlobe size='1.5em' />}
    </NavLink>
  </h3>
)

const IconLink = props => {
  console.log(props.name)
  const extraProps = { className: 'NavBarIcon', size: '1.2em' }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* {
  	props.name === 'Protagonistas' ?
  <MdPeople {...extraProps} />
  : props.name === 'Movimientos' ?
  <MdNaturePeople {...extraProps} />
  : props.name === 'Ejes' ?
  <MdZoomOutMap {...extraProps} />
  : <MdMoreHoriz {...extraProps} />
  } */}
      {props.name}
    </div>
  )
}

export default NavBar
