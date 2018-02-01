import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css';
import Admin from './adminComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({data: res}))
      .catch(err => console.log(err));
    this.postApi()
  }

  callApi = async () => {
    const response = await fetch('/api/menu');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  postApi = async() =>{
    fetch('/api/menu',
    {
      method: POST, 
      data: JSON.stringify({foo:'bar'})
    });
  }

  render() {
    return (
      <Router>
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
          <div>
            <Switch>
              <Route exact path="/" render={(props) => ( <MenuBoard value={this.state.data}/> )} />
              <Route path="/admin" component={Admin} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

class MenuBoard extends Component {
  render() {
    return(
      <div>
        <p className="App-intro">
            <img style = {{borderRadius: "50px"}} src = 'preciousisland.jpg'></img>
        </p>
        <table className = "Menu-board" id = "Lunch-board"> 
        <h1 style={{color: "darkred", width: "100%"}}> LUNCH (午餐)</h1>
        {this.props.value.map(function(attribute, index){
          var desc;
          if(attribute.Desc){
            desc = attribute.Desc;
          }
          return <tr style = {{textAlign:"left"}}>
            <th> {attribute.ID}. {attribute.Chinese} </th>
            <td>
            <tr> <th>{attribute.English}</th></tr>
            <tr style = {{fontSize: "small", maxWidth:"20px"}}> {desc} </tr>
            </td>
            <td> {attribute.Price} </td>
          </tr>
          })}
        </table>
      </div>
    );
  }
}

export default App;