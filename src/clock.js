import React from 'react'

export default class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  render () {
    return <h1>Time now: {this.state.date.toLocaleTimeString()}</h1>
  }
}
