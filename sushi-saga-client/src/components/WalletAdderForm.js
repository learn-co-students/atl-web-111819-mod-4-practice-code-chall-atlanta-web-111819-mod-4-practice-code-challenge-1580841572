import React from 'react'

class WalletAdderForm extends React.Component {
    state = {
        newBalance: '',
    }
    
    onBalanceChange = e => {
        this.setState({newBalance: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.newBalance)
        this.setState({newBalance: ''})
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <h2>Add Money to Wallet</h2>
            <input type="text" value={this.state.newBalance} onChange={this.onBalanceChange} placeholder="Add $ to wallet."/>
            <button>Add $$$!</button>
        </form>
    }
}

export default WalletAdderForm