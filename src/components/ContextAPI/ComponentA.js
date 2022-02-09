import React, { Component } from 'react';
import ComponentB from './ComponentB';

export class ComponentA extends Component {
  render() {
    return <ComponentB/>;
  }
}

export default ComponentA;
