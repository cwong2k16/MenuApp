/* EXTREMELY HELPFUL: https://stackoverflow.com/questions/46316600/cannot-post-data-from-react-js-to-node-js?answertab=active#tab-top
*  Was lost on how to send POST requests from React to Express app; link above helped a lot since it's set up the same way as my own code
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Admin extends Component {
    constructor() {
        super();
    }
    handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:5000/data/new", {
            mode: "no-cors",
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Chris',
                password: 'password'
            })
        })
        .then(res => console.log("Response: " + res))
        .catch(err => console.log(err));
    }
    render(){
        return (
            <div>
                <form>
                    <table style = {{width: "100%", paddingTop:"5%"}}>
                    <tr>
                        <th style={{textAlign:"right"}}><label for = "ID">ID: </label></th>
                        <td style={{textAlign:"left"}}><input name = "ID"></input></td>
                    </tr>
                    <tr>
                        <th style={{textAlign:"right"}}><label for = "Chinese">Chinese: </label></th>
                        <td style={{textAlign:"left"}}><input name = "Chinese"></input></td>
                    </tr>
                    <tr>
                        <th style={{textAlign:"right"}}><label for = "English">English: </label></th>
                        <td style={{textAlign:"left"}}><input name = "English"></input></td>
                    </tr>
                    <tr>
                        <th style={{textAlign:"right"}}><label for = "Desc">Desc: </label></th>
                        <td style={{textAlign:"left"}}><input name = "Desc"></input></td>
                    </tr>
                    <tr>
                        <th style={{textAlign:"right"}}><label for = "Price">Price: </label></th>
                        <td style={{textAlign:"left"}}><input name = "Price"></input></td>
                    </tr>
                    <tr>
                        <td style={{textAlign:"right"}}><input value = "Submit" type = "submit" onClick={this.handleSubmit.bind(this)}/></td>
                    </tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default Admin;

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class Member extends Component {
//   constructor() {
//     super();
//     this.state = { player: {} };
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     fetch('http://localhost:4000/player', {
//         mode: 'no-cors',
//         method: 'post',
//         headers: {
//             "Content-Type": "text/plain"
//         },
//         body: JSON.stringify({
//           number: 123,
//           name: "John",
//           position: "Andrew"
//         })
//     }).then(function(response) {
//       console.log(response);
//     }).catch(function(error) {
//       console.log('Request failed', error)
//     });    
//   }

//   render() {
//     return (
//       <div className="member-page">
//         <form>
//           <input type="submit" onClick={this.handleSubmit.bind(this)} />
//         </form>
//       </div>
//     )
//   }
// }
// export default Member;