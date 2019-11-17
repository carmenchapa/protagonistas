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
        <div className='gridPadding'>
          <div style={{ paddingTop: '4%', paddingBottom: '4%' }}>{newText(data.introProtas)}</div>
          <div className='gridEjes'>
            <EjeSquare text={'manifiesto'.toUpperCase()} color='cyan' />
            <EjeSquare text={'protagonistas'.toUpperCase()} color='pink' />
            {/* <EjeSquare text='arte' color={green} />
          <EjeSquare text='ciencia' color={aquamarine} /> */}
          </div>
        </div>

        {/* <div className='FullHeight FlexStyle' style={{ flexDirection: 'column', flex: 1, alignSelf: 'center' }}>
          <div style={secondContainerStyle}>
            <Square text='¿Qué es Protagonistas del progreso?' color='#d8d5bd' size={'45vh'} fontSize={50} />
            <Rectangle src={require('../static/images/map.png')} width={'55vh'} height={'35vh'} />
          </div>
        </div>
        <div className='FullHeight FlexStyle' style={thirdContainerStyle}>
          {newText(data.introProtas)}
        </div> */}
      </div>
    )
  }
}

const EjeSquare = props => (
  <div className={`FlexStyle Centred pT100 ${props.color}`}>
    <div style={inside}>
      <img src={props.img} alt='' />
      <p className='Mov' style={{ color: '#fff' }}>
        {props.text}
      </p>
    </div>
  </div>
)

const inside = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-100%'
}

const pT100 = {
  paddingTop: '100%'
  // backgroundColor: 'var(--pink)'
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
