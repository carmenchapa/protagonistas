import React from 'react'
import protas from '../data/protagonistas'
import { Link } from 'react-router-dom'
import ResponsiveLayout from '../components/ResponsiveLayout'
import { MdPlayCircleFilled } from 'react-icons/md'
import { GradientBackgroundImage, newText } from '../utils/helperFunctions'
import { SocialIcon, Square, Rectangle } from '../components/CommonComponents'
import * as constants from '../utils/constants'

export default class Protagonista extends React.Component {
  getHeight = () => window.innerHeight - 144 - 60

  render() {
    // console.log('in prota', this.props.match.params.id)
    const name = this.props.match.params.id.replace(':', '')
    const protagonista = protas.find(item => item.name === name)
    console.log(' mov', protagonista.movimiento)

    // const styles = {showSidebar: windowWidth > 768}
    return <ResponsiveLayout breakPoint={800} renderDesktop={() => <DesktopScreen protagonista={protagonista} name={name} />} renderMobile={() => <MobileScreen protagonista={protagonista} name={name} />} />
  }
}
const DesktopScreen = props => {
  const { name, protagonista } = props
  return (
    <div className='AppContainer'>
      <div className='FullFill Dark NabBarAvoidingHeight Row'>
        <div className='ProtaFichaContainer' style={{ paddingBottom: '7vw' }}>
          {/* <div className="Centred Column"> */}
          <p className='Name'>{name.toUpperCase()}</p>
          {/* <p className="Mov">{`MOV: ${protagonista.movimiento.toUpperCase()}`}</p> */}
          {newText(protagonista.text)}
          {/* </div> */}
          <div className='Centred'>
            {/* <MovButton mov={protagonista.movimiento.toUpperCase()} /> */}
            <h1>
              <MdPlayCircleFilled size='8vw' color={constants.PINK} />
            </h1>
          </div>
        </div>
        <div className='Centred ProtaImageContainer'>
          <img className='Centred ProtaImage' src={protagonista.img} alt='' />
        </div>
      </div>
      <div className='WhiteContainer NabBarAvoidingHeight Column'>
        <div className='Row'>
          <div
            className='Column'
            style={{
              width: 'calc(100vw - 60vh)',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '-7vw'
            }}
          >
            <div
              className='Row'
              style={{
                width: 'calc(100vw - 60vh)',
                justifyContent: 'center',
                paddingBottom: '4vw'
              }}
            >
              <Link
                className='link'
                to={{
                  pathname: `/movimientos:${protagonista.movimiento}`,
                  movimiento: protagonista.movimiento
                }}
              >
                <Square text={`Comuna 13.\nEl movimiento`} color={constants.CYAN} size={'20vw'} fontSize={'20vw'} style={{ marginRight: '2vw' }} />
              </Link>
              <Square text={`Comuna 13.\nEl movimiento`} color='#fff' size={'20vw'} fontSize={'20vw'} style={{ marginLeft: '2vw' }} />
            </div>

            <Rectangle width={'calc((20 + 2)*2vw)'} height={'20vw'} color={constants.GOLD} />
          </div>

          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'flex-end'
            }}
          >
            <Square
              src={protagonista.socialImg}
              // text="Comuna 13. El movimiento"
              color={constants.CYAN}
              size={'25vw'}
              fontSize={20}
              inst={protagonista.instagram}
              facebook={protagonista.facebook}
              // style={{ marginLeft: 30 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const MobileScreen = props => {
  const { name, protagonista } = props
  return (
    <div className='AppContainer Dark'>
      <div className='Centred ProtaImgContainer' style={GradientBackgroundImage(protagonista.img)}>
        <p className='Name'>{name.toUpperCase()}</p>
        <p className='Text'>{protagonista.shortText}</p>
        <div className='Column'>
          {protagonista.instagram && <SocialIcon link={protagonista.instagram} icon='instagram' />}
          {protagonista.facebook && <SocialIcon link={protagonista.facebook} icon='facebook' />}
        </div>
      </div>
      <div className='Column Dark' style={{ padding: 15, justifyContent: 'centre' }}>
        {newText(protagonista.text)}
        <MovButton mov={protagonista.movimiento} />

        {/* <TabBar />
        <div className='Centred'>
          <h1>
            <MdPlayCircleFilled size='4em' color={constants.PINK} />
          </h1>
        </div> */}
      </div>
      <MobileTab />
    </div>
  )
}

const TabBar = props => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: '40px'
    }}
  >
    <p onClick={props.onClick} class='TabBarItem'>
      {'Documental'.toUpperCase()}
    </p>
    <p onClick={props.onClick} class='TabBarItem'>
      {'Protagonistas'.toUpperCase()}
    </p>
  </div>
)

class MobileTab extends React.Component {
  state = {
    toggle: false
  }

  handleClick = () => this.setState({ toggle: !this.state.toggle })

  render() {
    const tabsStyle = {
      marginLeft: this.state.toggle ? '-100vw' : null,
      transition: 'margin .5s'
    }
    console.log('clicking')
    console.log(this.state.toggle)

    return (
      <div className='Dark'>
        <TabBar onClick={() => this.handleClick()} />
        <div className='Row'>
          <div className='Centred' style={{ minWidth: '100vw', ...tabsStyle }}>
            <h1>
              <MdPlayCircleFilled size='4em' color={constants.PINK} />
            </h1>
          </div>
          <div className='Centred' style={{ minWidth: '100vw' }}></div>
        </div>
      </div>
    )
  }
}

const MovButton = props => (
  <Link
    className='link Centred'
    to={{
      pathname: `/movimientos:${props.mov}`,
      movimiento: props.mov
    }}
  >
    <button className='MovButton'>{props.mov.toUpperCase()}</button>
  </Link>
)
