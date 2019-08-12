import React from 'react';

export default class Movimientos extends React.Component {
	getWidth = () =>	3 * (window.innerWidth*0.28 + 40)
  render() {
		return (
			<div className="AppContainer NabBarAvoiding">
				<div style={{...gridStyle, maxWidth: `${this.getWidth()}px`}}>
				{[1,2,3,4,5,6,7].map(e => 
					<Movimiento width={'28vw'} height={'20vw'} name='Protagonista' src={require('../static/images/sebas.jpg')} 
					description='Some short description'/>
				)}
			</div>
			</div>
			)
  }
}

const gridStyle = {
	display: 'flex',
	// maxWidth: '1200px',
  margin: '0 auto',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	flexWrap: 'wrap'
}

const movimientoContainer = (width, height, src) => {
	return {
		display: 'flex',
		width: width,
		height: height,
		overflow: 'hidden',
		backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6)60%, rgba(0, 0, 0, 0.95)100%),
		url(${src})`,
		backgroundSize: 'cover',
		margin: 20,
		alignItems: 'flex-end'
}
}


const Movimiento = (props) =>
		<div style={movimientoContainer(props.width, props.height, props.src)}>
			<div style={{flexDirection: 'row', margin: 10, color: 'var(--gold)'}}>
			<p className="ProtagonistaName">{props.name.toUpperCase()}</p>
			<p className="ProtagonistaDescription">{props.description.toUpperCase()}</p>
			</div>
		</div>