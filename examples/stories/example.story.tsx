import React, { PureComponent } from 'react'

import { Switch } from '../../src'

class Example extends PureComponent {
  state = {
    value1: false,
    value2: true
  }

  render() {
    return (
      <div>
        <div className="title">
          是否开启: {this.state.value1 ? 'YES' : 'NO'}
        </div>
        <Switch isChecked={this.state.value1} onChange={this.handleChange1} />
        <div className="title">
          是否开启: {this.state.value2 ? 'YES' : 'NO'}
        </div>
        <Switch isChecked={this.state.value2} onChange={this.handleChange2} />
      </div>
    )
  }

  handleChange1 = isChecked => {
    this.setState({
      value1: isChecked
    })
  }

  handleChange2 = isChecked => {
    this.setState({
      value2: isChecked
    })
  }
}

export default Example
