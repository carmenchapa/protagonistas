import React from 'react'
import { Link } from 'react-router-dom'
import protas from '../data/protagonistas'

export default class Protagonistas extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className='AppContainer NabBarAvoiding ListContainer Dark'>
        <ProtagonistasList />
      </div>
    )
  }
}

export const ProtagonistasList = props => (
  <div className='gridPadding gridProtas'>
    {protas.map((e, i) => (
      <Prota key={i} name={e.name} src={e.img} description={e.shortText} background={props.background} />
    ))}
  </div>
)

const protaContainer = src => {
  return {
    paddingTop: '85%',
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover'
  }
}

const Prota = props => (
  <Link
    className={`link ${props.background === 'white' ? 'Light' : 'Dark OldLaceColor'}`}
    to={{
      pathname: `/protagonistas:${props.name}`,
      protagonista: props.name
    }}
  >
    <div>
      <div style={protaContainer(props.src)} />
      <p className='ProtagonistaName'>{props.name.toUpperCase()}</p>
      <p className='ProtagonistaDescription'>{props.description}</p>
    </div>
  </Link>
)
