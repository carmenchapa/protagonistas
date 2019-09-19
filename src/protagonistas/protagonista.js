import React from 'react'
import protas from '../data/protagonistas'
import { Link } from 'react-router-dom'
import ResponsiveLayout from '../components/ResponsiveLayout'
import { MdPlayCircleFilled } from 'react-icons/md'
import { newText } from '../utils/helperFunctions'
import { Square, Rectangle } from '../components/CommonComponents'
import * as constants from '../utils/constants'

const pink = '#ff8592'

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
              <MdPlayCircleFilled size='8vw' color={pink} />
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

const imageContainer = src => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '85vw',
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3)70%, rgba(0, 0, 0, 0.95)100%),
		url(${src})`,
    backgroundSize: 'cover',
    alignItems: 'center',
    backgroundPosition: 'center',
    justifyContent: 'flex-end'
  }
}

const MobileScreen = props => {
  const { name, protagonista } = props
  return (
    <div className='AppContainer Dark'>
      <div className='Centred' style={imageContainer(protagonista.img)}>
        <p className='Name'>{name.toUpperCase()}</p>
        <p className='Text'>{protagonista.shortText}</p>
      </div>
      <div className='Column' style={{ padding: 15, justifyContent: 'centre' }}>
        {newText(protagonista.text)}
        <MovButton mov={protagonista.movimiento} />

        <TabBar />
        {/* <div className="Centred">
            <h1>
              <MdPlayCircleFilled size="4em" color={pink} />
            </h1>
          </div> */}
      </div>
    </div>
  )
}

const TabBar = props => (
  <div
    style={{
      display: 'flex',
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: '40px'
    }}
  >
    <p class='TabBarItem'>{'Documental'.toUpperCase()}</p>
    <p class='TabBarItem'>{'Protagonistas'.toUpperCase()}</p>
  </div>
)

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
