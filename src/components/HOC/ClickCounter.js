import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

export class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props
    console.log('props', this.props)
    return (
        <button onClick={incrementCount}>
            Clicked {count} times
        </button>
    )
  }
}

export default UpdatedComponent(ClickCounter);
