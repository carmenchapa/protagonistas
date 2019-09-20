import React from 'react'
import '../static/images/map.png'
import data from '../data/generalTexts'
import { newText } from '../utils/helperFunctions'
import { Square, Rectangle } from '../components/CommonComponents'

export default class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className='HomeContainer'>
        <div className='HomeBackground NabBarAvoiding'>
          <p className='HomeTitle'>
            PROTAGONISTAS <br />
            DEL PROGRESO
          </p>
        </div>
        <div className='FullHeight FlexStyle' style={{ flexDirection: 'column', flex: 1, alignSelf: 'center' }}>
          <div style={secondContainerStyle}>
            <Square text='¿Qué es Protagonistas del progreso?' color='#d8d5bd' size={'45vh'} fontSize={50} />
            <Rectangle src={require('../static/images/map.png')} width={'55vh'} height={'35vh'} />
          </div>
        </div>
        <div className='FullHeight FlexStyle' style={thirdContainerStyle}>
          {newText(data.introProtas)}
        </div>
      </div>
    )
  }
}

const secondContainerStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  margin: 'auto',
  marginLeft: '5%',
  marginRight: '5%',
  maxHeight: '45vh'
}

const thirdContainerStyle = {
  marginLeft: '25vw',
  marginRight: '25vw',
  fontSize: '1.2vw'
}
