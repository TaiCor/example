import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './clock'
import Welcome from './welcome'

class App extends React.Component {
  render () {
    return (
      <div>
        <Welcome name='Vadim' />
        <Clock />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
