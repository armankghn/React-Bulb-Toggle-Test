import React, { Component } from 'react';
import './App.css';
import { BulbOn, BulbOff, BulbBroken } from './Components/';

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = { bulb: 'off' }
  }

  changeBulb = newState => this.setState({bulb: newState})

  render() {
    const { bulb } = this.state;

    return (
      <div className="root">
        <button onClick={()=> this.changeBulb('on')}>On</button>
        <button onClick={()=> this.changeBulb('off')}>Off</button>
        <button onClick={()=> this.changeBulb('broken')}>Break</button>
        {bulb === 'on' &&  <BulbOn />}
        {bulb === 'off' &&  <BulbOff />}
        {bulb === 'broken' &&  <BulbBroken />}
      </div>
    );
  }
}