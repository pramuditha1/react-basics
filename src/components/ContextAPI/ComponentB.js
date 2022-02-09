import React, { Component } from 'react';
import ComponentC from './ComponentC';

export class ComponentB extends Component {
  render() {
    return <ComponentC/>;
  }
}

export default ComponentB;
