import React from 'react'

export function capitalizeFirst(value) {
  const newValue = value.toLowerCase()
  return newValue.charAt(0).toUpperCase() + newValue.slice(1)
}

export function newText(text) {
  return text.split('\n').map((item, i) => {
    return (
      <p key={i} className='Text'>
        {item}
      </p>
    )
  })
}

export const GradientBackgroundImage = src => {
  return {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3)70%, rgba(0, 0, 0, 0.95)100%),
		url(${src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
}

export const BackgroundImage = src => {
  return {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
}
