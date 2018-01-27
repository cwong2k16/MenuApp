import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PRECIOUS ISLAND TEA SHOP MENU</h1>
          <table className = 'App-table' style = {{textAlign:"left"}}>
            <tr>
              <td>366 New Dorp Lane Staten Island, NY, 10306</td>
              <td style = {{textAlign:"right"}}> Sunday - Monday</td>
            </tr>
            <tr>
              <td>718-878-5504</td>
              <td style = {{textAlign:"right"}}> 10am - 10pm</td>
            </tr>
          </table>
        </header>
        <p className="App-intro">
          <img style = {{borderRadius: "50px"}} src = 'preciousisland.jpg'></img>
        </p>
      </div>
    );
  }
}

class MenuBoard extends Component {
  
}

export default App;
