import React from 'react'
import { newText } from '../utils/helperFunctions'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const imageContainer = src => {
  return {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    alignItems: 'flex-end'
  }
}

export const Square = props => (
  <div
    className='Centred'
    style={{
      backgroundColor: props.color,
      width: props.size,
      height: props.size,
      ...props.style
    }}
  >
    {props.text && <div style={{ padding: 40, fontSize: props.fontSize }}>{newText(props.text)}</div>}
    {props.src && (
      <div style={imageContainer(props.src)}>
        {props.inst && <SocialIcon link={props.inst} icon='instagram' />}
        {props.facebook && <SocialIcon link={props.facebook} icon='facebook' />}
      </div>
    )}
  </div>
)

export const Rectangle = props => (
  <div
    className='Centred'
    style={{
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
      alignItems: 'flex-end',
      border: 'none',
      ...props.style
    }}
  >
    {props.src && <img className='cover' src={props.src} alt='' />}
  </div>
)

export const SocialIcon = props => {
  const iconProps = {
    size: '1.8em',
    color: 'white',
    style: { padding: 8, marginLeft: 4 }
  }
  return (
    <a href={props.link} target='blank'>
      {props.icon === 'instagram' ? <FaInstagram {...iconProps} /> : props.icon === 'facebook' ? <FaFacebook {...iconProps} /> : null}
    </a>
  )
}
