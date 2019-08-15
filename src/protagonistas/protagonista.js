import React from 'react';
import { MdPlayCircleFilled } from "react-icons/md";

const pink = '#ff8592'

export default class Protagonista extends React.Component {

	getHeight = () =>	(window.innerHeight - 144 - 60)

  render() {

		const src = require('../static/images/sebas.jpg')
		const name = 'nombre del prota'
		const movimiento = 'comuna 13'
		const text = 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.'
		return (
			<div className="AppContainer" style={{alignContent: 'center'}}>
					<div className="Protagonista NabBarAvoidingHeight">
						<div  style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: 80}}>
							<p className="Name" >{name.toUpperCase()}</p>
							<p className="Mov" >{`MOV: ${movimiento.toUpperCase()}`}</p>
							<p className="Text" >{text}</p>
							<div className="Centred"><h1><MdPlayCircleFilled size='4em' color={pink} /></h1></div>
						</div>
						<div className="Centred" height={this.getHeight()} style={{ width: `${this.getHeight()*1.61}`, justifyContent: 'flex-end', padding: 30, paddingTop: 72 + 30}}>
							<img className="Centred" height='100%' width='100%' src={src} style={{objectFit: "cover"}} alt="" />
						</div>
					</div>
			</div>
			)
  }
}