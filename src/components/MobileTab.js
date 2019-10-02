import React from 'react'
import { MdPlayCircleFilled } from 'react-icons/md'
import { ProtagonistasList } from '../protagonistas'

import * as constants from '../utils/constants'

const TabBar = props => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '60px'
    }}
  >
    <p onClick={props.onClick} class='TabBarItem'>
      {'Documental'.toUpperCase()}
    </p>
    <p onClick={props.onClick} class='TabBarItem'>
      {'Protagonistas'.toUpperCase()}
    </p>
  </div>
)

export default class MobileTab extends React.Component {
  state = {
    toggle: false
  }

  handleClick = () => this.setState({ toggle: !this.state.toggle })

  render() {
    const tabsStyle = {
      marginLeft: this.state.toggle ? '-100vw' : null,
      transition: 'margin .5s'
    }
    console.log('clicking')
    console.log(this.state.toggle)

    return (
      <div className='Dark'>
        <TabBar onClick={() => this.handleClick()} />
        <div className='Row'>
          <div className='Centred' style={{ minWidth: '100vw', height: '80vw', ...tabsStyle }}>
            <h1>
              <MdPlayCircleFilled size='4em' color={constants.PINK} />
            </h1>
          </div>
          <div style={{ minWidth: '100vw' }}>
            <ProtagonistasList />
          </div>
        </div>
      </div>
    )
  }
}
