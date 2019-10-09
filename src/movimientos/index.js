import React from 'react'
import { Link } from 'react-router-dom'
import movimientos from '../data/movimientos'
import { GradientBackgroundImage } from '../utils/helperFunctions'

const Movimientos = () => (
  <div className='AppContainer NabBarAvoiding ListContainer gridPadding gridMov'>
    {movimientos.map((e, i) => (
      <Movimiento key={i} name={e.name} src={e.img} description={e.shortText} />
    ))}
  </div>
)

const Movimiento = props => (
  <Link className='link' to={{ pathname: `/movimientos:${props.name}`, movimiento: props.name }}>
    <div className='MovListImgContainer' style={GradientBackgroundImage(props.src)}>
      <div style={{ flexDirection: 'row', padding: '1em', paddingBottom: 1, color: 'var(--gold)' }}>
        <p className='ProtagonistaName'>{props.name.toString().toUpperCase()}</p>
        <p className='ProtagonistaDescription' style={{ color: 'OldLace' }}>
          {props.description.toString().toUpperCase()}
        </p>
      </div>
    </div>
  </Link>
)

export default Movimientos
