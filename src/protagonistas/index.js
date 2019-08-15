import React from 'react';
import { Link } from "react-router-dom";


export default class Protagonistas extends React.Component {

	getWidth = () =>	4 * (window.innerWidth*0.2 + 40)

  render() {
		return (
			<div className="AppContainer NabBarAvoiding" style={{alignContent: 'center'}}>
					<div style={{...gridStyle, maxWidth: `${this.getWidth()}px`}}>
					{[1,2,3,4,5,6,7].map((e, i) => 
						<Prota key={i} size={'20vw'} name='Protagonista' src={require('../static/images/sebas.jpg')} 
						description='Some short description'/>
					)}
				</div>
			</div>
			)
  }
}

const gridStyle = {
	display: 'flex',
	// float: 'left',
	// maxWidth: '1000px',
	// width: 'intrinsic',
	whiteSpace: 'nowrap',
	// width: 'fit-content',
  margin: '0 auto',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	flexWrap: 'wrap'
}

// var d= $('div');
// var w;


// d.children().each(function(){
//  w = w + $(this).outerWidth();
//  d.css('width', w + 'px')
// });


const Prota = (props) =>
<Link className="link"
	to={{	pathname: `/protagonistas:id`}}
	>
	<div style={{flexDirection: 'colum', margin: 20, alignSelf: 'flex-start'}}>
		<div className="Centred" style={{width: props.size, height: props.size, overflow: 'hidden'}}>
			<img src={props.src} width='100%' alt="" />
			
		</div>
		<p className="ProtagonistaName">{props.name.toUpperCase()}</p>
		<p className="ProtagonistaDescription">{props.description}</p>
	</div>
	</Link>
