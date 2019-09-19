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
