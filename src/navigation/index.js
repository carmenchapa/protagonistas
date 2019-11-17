import React from 'react'
// import { Link } from 'react-router-dom';
// import SignOutButton from '../SignOut';
import * as ROUTES from './routes'
// import { AuthUserContext } from '../Session';

// import { withStyles, createStyles } from '@material-ui/core';
import NavBar from '../components/NavBar'
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';

// import TemporaryDrawer from './Drawer'

const styles = {
  root: {
    flexGrow: 1
  },
  color: {
    color: '#FFF'
  },
  link: {
    textDecoration: 'none'
  }
}

const Navigation = () => (
  <div>
    {/* <AuthUserContext.Consumer>
    {
    authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />
    }
		</AuthUserContext.Consumer> */}
    <NavigationAuth />
  </div>
)

// const NavigationAuth = withStyles(styles)(({ root, color, link }: Props) => (
const NavigationAuth = () => (
  <div style={styles.root}>
    <NavBar
      routes={[ROUTES.HOME, ROUTES.ABOUT, ROUTES.MOVIMIENTOS, ROUTES.PROTAGONISTAS, ROUTES.MAPA]}
      // signOut={<SignOutButton/>}
    />
  </div>
)

// const NavigationNonAuth = () => (
//     <AppBar position="static">
//         <Toolbar>
//             <div style={styles.root} >
//             <Link to={ROUTES.LANDING} style={styles.link}><Button style={styles.color}>Landing</Button></Link>
//             </div>
//             <Link to={ROUTES.SIGN_IN} style={styles.link}><Button style={styles.color}>Sign in</Button></Link>
//         </Toolbar>
//     </AppBar>
// );

export default Navigation
