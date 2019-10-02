import React from 'react'
import movimientos from '../data/movimientos'
import ResponsiveLayout from '../components/ResponsiveLayout'

import { MdPlayCircleFilled } from 'react-icons/md'
import { GradientBackgroundImage, newText } from '../utils/helperFunctions'
import MobileTab from '../components/MobileTab'
import { ProtagonistasList } from '../protagonistas'

import * as constants from '../utils/constants'

export default class Movimiento extends React.Component {
  render() {
    // console.log("in prota", this.props.match.params.id);
    const name = this.props.match.params.id.replace(':', '')
    const movimiento = movimientos.find(item => item.name === name)
    // console.log("name", name, movimiento);
    return (
      <ResponsiveLayout
        breakPoint={800}
        renderDesktop={() => <DesktopScreen movimiento={movimiento} name={name} />}
        renderMobile={() => <MobileScreen movimiento={movimiento} name={name} />}
      />
    )
  }
}

const DesktopScreen = props => {
  const { name, movimiento } = props
  return (
    <div className='AppContainer' style={{ alignContent: 'center' }}>
      <div
        className='Movimiento NabBarAvoidingHeight'
        style={{
          backgroundImage: `url(${movimiento.img})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom'
        }}
      >
        <div className='MovimientoFichaContainer'>
          <p className='Name'>{name.toUpperCase()}</p>
          {newText(movimiento.text)}
          <div className='Centred'>
            <h1>
              <MdPlayCircleFilled size='4em' color={constants.PINK} />
            </h1>
          </div>
        </div>
        {/* <div className='Centred MovimientoImageContainer'>
          <img
              className="Centred MovimientoImage"
              src={movimiento.img}
              alt=""
            /> 
        </div> */}
      </div>
      <div style={{ paddingTop: 100, paddingBottom: 100 }}>
        <ProtagonistasList background='white' />
      </div>
    </div>
  )
}

const MobileScreen = props => {
  const { name, movimiento } = props
  return (
    <div className='AppContainer'>
      <div className='Centred ProtaImgContainer White' style={GradientBackgroundImage(movimiento.img)}>
        <p className='Name'>{name.toUpperCase()}</p>
        <p className='Text'>{movimiento.shortText}</p>
      </div>
      <div className='Column' style={{ padding: 15, justifyContent: 'centre' }}>
        {newText(movimiento.text)}
        {/* <MovButton mov={movimiento.movimiento} /> */}
      </div>
      <MobileTab />
    </div>
  )
}
