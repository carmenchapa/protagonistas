import React from 'react';
import data from '../data/generalTexts'

export default class Ejes extends React.Component {
  render() {
		return (
			<div className="AppContainer NabBarAvoiding">
				<div className="FullHeight FlexStyle" style={containerStyle}>
					<p>{data.ejes}</p>
					<div className="FlexStyle Row">
						<div className="FlexStyle" style={cyan}></div>
						<div className="FlexStyle" style={pink}></div>
					</div>

					<div className="FlexStyle Row">
						<div className="FlexStyle" style={green}></div>
						<div className="FlexStyle" style={aquamarine}></div>
					</div>
				</div>
			</div>
			)
  }
}

const pink = {
	backgroundColor: 'var(--pink)'
}
const cyan = {
	backgroundColor: 'var(--cyan)'
}
const aquamarine = {
	backgroundColor: 'var(--aquamarine)'
}
const green = {
	backgroundColor: 'var(--green)'
}

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	marginLeft: '20vw',
	marginRight: '20vw',
	fontSize: '1.4rem'
}