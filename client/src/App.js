import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{"Chinese": "牛肉和西兰花", "English": "Beef with", "Desc":"(Beef, chicken or roast pork)", "Price":"$8.50"}, 
             {"Chinese":"胡椒牛排", "English":"Pepper Steak", "Price":"$8.50"}]
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
         var desc;
         if(attribute.Desc){
           desc = attribute.Desc;
         }
         return <tr style = {{textAlign:"left"}}>
          <th> {attribute.Chinese} </th>
          <td>
          <tr> <th>{attribute.English}</th></tr>
          <tr style = {{fontSize: "small"}}> {desc} </tr>
          </td>
          <td> {attribute.Price} </td>
         </tr>
        })}
      </table>
    );
  }
}

export default App;
