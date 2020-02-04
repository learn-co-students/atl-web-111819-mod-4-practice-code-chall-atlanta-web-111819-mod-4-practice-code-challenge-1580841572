import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      eatenSushi: [],
      place: 0
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushi => {
      this.setState({
        sushis: sushi
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatenSushi={this.state.eatenSushi} place={this.state.place}/>
        <Table />
      </div>
    );
  }
}

export default App;