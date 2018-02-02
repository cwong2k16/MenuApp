/* EXTREMELY HELPFUL: https://stackoverflow.com/questions/46316600/cannot-post-data-from-react-js-to-node-js?answertab=active#tab-top
*  Was lost on how to send POST requests from React to Express app; link above helped a lot since it's set up the same way as my own code
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Admin extends Component {
    constructor() {
        super();
        this.state = {};
    }
    handleSubmit(e){
        e.preventDefault();

        var id = document.getElementById('ID').value;
        var chinese = document.getElementById('Chinese').value;
        var english = document.getElementById('English').value;
        var desc = document.getElementById('Desc').value;
        var price = document.getElementById('Price').value;

        fetch("http://localhost:5000/data/new", {
            mode: "no-cors",
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: 'hello' 
            // JSON.stringify({
            //     ID: "hello",
            //     // Chinese: chinese,
            //     // English: english,
            //     // Desc: desc,
            //     // Price: price
            // })
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
                        <td style={{textAlign:"left"}}><input id = "ID" name = "ID"></input></td>
                    </tr>
                    <tr>
                        <th style={{textAlign:"right"}}><label for = "Chinese">Chinese: </label></th>
                        <td style={{textAlign:"left"}}><input id = "Chinese" value = {this.state.Chinese} name = "Chinese"></input></td>
                    </tr>
                    <tr>
                        <th style={{textAlign:"right"}}><label for = "English">English: </label></th>
                        <td style={{textAlign:"left"}}><input id = "English" value = {this.state.English} name = "English"></input></td>
                    </tr>
                    <tr>
                        <th style={{textAlign:"right"}}><label for = "Desc">Desc: </label></th>
                        <td style={{textAlign:"left"}}><input id = "Desc" value = {this.state.Desc} name = "Desc"></input></td>
                    </tr>
                    <tr>
                        <th style={{textAlign:"right"}}><label for = "Price">Price: </label></th>
                        <td style={{textAlign:"left"}}><input id = "Price" value = {this.state.Price} name = "Price"></input></td>
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