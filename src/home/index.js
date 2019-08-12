import React from 'react';
import '../static/images/map.png'

export default class Home extends React.Component {
  render() {
		return (
			<div className="HomeContainer" >
				<div className="HomeBackground NabBarAvoiding">
					<p className="HomeTitle">PROTAGONISTAS <br/>DEL PROGRESO</p>
				</div>
				<div className="FullHeight FlexStyle">
					<div style={secondContainerStyle}>
						<Square text='¿Qué es Protagonistas del progreso?' color='#d8d5bd' size={'45vh'} fontSize={50}/>
						<Rectangle src={require('../static/images/map.png')} width={'55vh'} height={'40vh'} />
					</div>
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
	alignSelf: 'center',
	marginLeft: '5%',
	marginRight: '5%'
}

const Square = (props) => <div className="Centred" style={{backgroundColor: props.color, width: props.size, height: props.size, padding: 40}}><p style={{fontSize: props.fontSize}}>{props.text}</p></div>

const Rectangle = (props) => <div className="Centred" style={{backgroundColor: props.color, width: props.width, height: props.height, alignSelf: 'flex-end'}}><img src={props.src} width={'100%'} height={'100%'} alt="" /></div>