import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><a href="/pages/home/home.html">跳转到 Home 页面</a></p>
        <p><a href="/pages/page1/page1.html">跳转到 Page1 页面</a></p>
        <p><a href="/pages/page2/page2.html">跳转到 Page2 页面</a></p>
      </div>
    );
  }
}

export default App;
