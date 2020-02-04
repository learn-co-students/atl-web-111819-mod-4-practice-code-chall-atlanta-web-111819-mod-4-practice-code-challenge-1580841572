import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletAdderForm from './components/WalletAdderForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    wallet: 100,
    cursor: 1,
    eatenSushi: []
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(sushis => this.setState({sushis: sushis}))
  }

  handleMoreClicked = e => {
    this.setState(previousState => {
      let newCursor = previousState.cursor + 4 > this.state.sushis.length ? 
          1 : previousState.cursor + 4
      return {
        cursor: newCursor
      }
    })
  }

  eatSushi = sushi => {
    let wallet = this.state.wallet
    if (sushi.price <= wallet) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        wallet: wallet - sushi.price
      })
    }
  }

  addCash = newBalance => {
    const cash = parseInt(newBalance)

    if (cash) {
      this.setState(previousState => {
        return {
          wallet: previousState.wallet + cash
        }
      })
    }
  }

  render() {
    const {cursor, sushis, wallet, eatenSushi} = this.state
    return (
      <div className="app">
        <WalletAdderForm onSubmit={this.addCash} />
        <SushiContainer 
          sushis={sushis.slice(cursor-1, (cursor+4)-1)}
          handleMoreClicked={this.handleMoreClicked}
          eatSushi={this.eatSushi}
          eatenSushi={eatenSushi}
        />
        <Table wallet={wallet} eatenSushi={eatenSushi}/>
      </div>
    );
  }
}

export default App;