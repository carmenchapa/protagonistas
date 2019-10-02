import React from 'react'
import protas from '../data/protagonistas'
import { Link } from 'react-router-dom'
import ResponsiveLayout from '../components/ResponsiveLayout'
import { MdPlayCircleFilled } from 'react-icons/md'
import { GradientBackgroundImage, newText } from '../utils/helperFunctions'
import { SocialIcon, Square, Rectangle } from '../components/CommonComponents'
import MobileTab from '../components/MobileTab'
import { ProtagonistasList } from '../protagonistas'

import * as constants from '../utils/constants'

export default class Protagonista extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    // console.log('in prota', this.props.match.params.id)
    const name = this.props.match.params.id.replace(':', '')
    const protagonista = protas.find(item => item.name === name)

    // const styles = {showSidebar: windowWidth > 768}
    return (
      <ResponsiveLayout
        breakPoint={800}
        renderDesktop={() => <DesktopScreen protagonista={protagonista} name={name} />}
        renderMobile={() => <MobileScreen protagonista={protagonista} name={name} />}
      />
    )
  }
}

const DesktopScreen = props => {
  const { name, protagonista } = props
  return (
    <div className='AppContainer'>
      <div className='FullFill Dark NabBarAvoidingHeight Row'>
        <div className='ProtaFichaContainer' style={{ paddingBottom: '7vw' }}>
          <p className='Name'>{name.toUpperCase()}</p>
          {/* <p className="Mov">{`MOV: ${protagonista.movimiento.toUpperCase()}`}</p> */}
          {newText(protagonista.text)}
          <div className='Centred'>
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
                <Square
                  text={`Comuna 13.\nEl movimiento`}
                  color={constants.CYAN}
                  size={'20vw'}
                  fontSize={'20vw'}
                  style={{ marginRight: '2vw' }}
                />
              </Link>
              <Square
                text={`Comuna 13.\nEl movimiento`}
                color='#fff'
                size={'20vw'}
                fontSize={'20vw'}
                style={{ marginLeft: '2vw' }}
              />
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
              color={constants.CYAN}
              size={'25vw'}
              fontSize={20}
              inst={protagonista.instagram}
              facebook={protagonista.facebook}
            />
          </div>
        </div>
        <MovButton mov='POSTULA TU PROTAGONISTA' link='/' color={constants.PINK} />
      </div>
      <div className='Dark' style={{ paddingTop: 100, paddingBottom: 100 }}>
        <ProtagonistasList />
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
      </div>
      <MobileTab />
    </div>
  )
}

const MovButton = props => (
  <Link
    className='link Centred'
    to={{
      pathname: props.link ? props.link : `/movimientos:${props.mov}`,
      movimiento: props.mov
    }}
  >
    <button className='MovButton' style={props.color && { backgroundColor: props.color }}>
      {props.mov.toUpperCase()}
    </button>
  </Link>
)
