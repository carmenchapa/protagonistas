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
          <EjeSquare img={ent} color={cyan} />
          <EjeSquare img={education} color={pink} />
          <EjeSquare img={art} color={green} />
          <EjeSquare img={science} color={aquamarine} />
        </div>
      </div>
    )
  }
}

const EjeSquare = props => (
  <div className='FlexStyle Centred' style={props.color}>
    <img style={inside} src={props.img} alt='' />
  </div>
)

const inside = {
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
