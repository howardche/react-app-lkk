import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    items: [],
    status: [],
    value: "",
  }

  addItem = () => {
    let currentItems = [...this.state.items]
    let currentStatus = [...this.state.status]
    currentItems.push(this.state.value)
    currentStatus.push(false)
    this.setState({
      items: currentItems,
      status: currentStatus
    })
  }

  changeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onItemClickHandler = (index) => {
    let currentStatus = [...this.state.status]
    currentStatus[index] = !currentStatus[index]
    this.setState({
      status: currentStatus
    })
  }

  render() {
     return (
      <div className="App">
        <input type="text" onChange={this.changeHandler} value={ this.state.value } />
        <button onClick={this.addItem}>Add Item</button>
        <ul>
          {
            this.state.items.map((item, index) => {
              return (
                <li className={ this.state.status[index] ? 'TRUE' : 'FALSE' } onClick={ () => { this.onItemClickHandler(index) } }>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
