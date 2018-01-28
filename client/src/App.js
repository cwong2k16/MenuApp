import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [["牛肉和西兰花", "Beef with Broccoli", "$8.50"], ["胡椒牛排", "Pepper Steak", "$8.50"]]
    };
  }
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
        <div>
          {this.renderMenuBoard()}
        </div>
      </div>
    );
  }
  renderMenuBoard() {
    return <MenuBoard value = {this.state.data}/>
  }
}

class MenuBoard extends Component {
  render() {
    return(
      <table className = "Menu-board"> 
       {this.props.value.map(function(attribute, index){
         return <tr style = {{textAlign:"left"}}>
         {attribute.map(function(attr, i){
           return <td key = {i}>{attr} </td>
         })}
         </tr>
        //  return <tr key={index}>{attribute}</tr>
       })}
      </table>
    );
  }
}

export default App;
