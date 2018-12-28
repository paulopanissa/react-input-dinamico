import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props: any) {
    super(props)

    this.state = {
      name: '',
      desc: '',
      age: ''
    }

    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleChangeInput(e: any) {
    const { target } = e
    const { name } = target
    const value = target.type === 'checkbox' ? target.checkbox : target.value

    return this.setState({
      [name]: value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>
            <input type="text" name="name"  onChange={(e) => { this.handleChangeInput(e) }}/>
            <input type="text" name="desc"  onChange={(e) => { this.handleChangeInput(e) }}/>
            <input type="number" name="age"  onChange={(e) => { this.handleChangeInput(e) }}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
