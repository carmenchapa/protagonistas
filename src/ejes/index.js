import React from 'react'
// import data from '../data/generalTexts'

export default class Ejes extends React.Component {
  render() {
    return (
      <div className='AppContainer NabBarAvoiding'>
        <div className=' gridPadding gridEjes'>
          {/* <p>{data.ejes}</p> */}
          {/* <div className="FlexStyle Row"> */}
          <div className='FlexStyle' style={cyan}></div>
          <div className='FlexStyle' style={pink}></div>
          {/* </div> */}

          {/* <div className="FlexStyle Row"> */}
          <div className='FlexStyle' style={green}></div>
          <div className='FlexStyle' style={aquamarine}></div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

const pink = {
  paddingTop: '100%',
  backgroundColor: 'var(--pink)'
}
const cyan = {
  paddingTop: '100%',
  backgroundColor: 'var(--cyan)'
}
const aquamarine = {
  paddingTop: '100%',
  backgroundColor: 'var(--aquamarine)'
}
const green = {
  paddingTop: '100%',
  backgroundColor: 'var(--green)'
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '18vw',
  marginRight: '18vw',
  fontSize: '1.4rem'
}
