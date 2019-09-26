import React from 'react'
import ent from '../static/images/ejes/ent.svg'
import education from '../static/images/ejes/education.svg'
import art from '../static/images/ejes/art.svg'
import science from '../static/images/ejes/science.svg'

// import data from '../data/generalTexts'

export default class Ejes extends React.Component {
  render() {
    return (
      <div className='AppContainer NabBarAvoiding'>
        <div className=' gridPadding gridEjes'>
          <EjeSquare img={ent} text='emprendeduría' color={cyan} />
          <EjeSquare img={education} text='educación' color={pink} />
          <EjeSquare img={art} text='arte' color={green} />
          <EjeSquare img={science} text='ciencia' color={aquamarine} />
        </div>
      </div>
    )
  }
}

const EjeSquare = props => (
  <div className='FlexStyle Centred' style={props.color}>
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

const pink = {
  paddingTop: '100%',
  backgroundColor: 'var(--pink)'
}
const cyan = {
  // --aspectRatio: '1/1',
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
