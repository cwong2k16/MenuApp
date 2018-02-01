import React from 'react';

const Admin = () => {
    return (
        <div>
            <form method = "post">
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
                    <td style={{textAlign:"right"}}><button type = "submit">Submit</button></td>
                </tr>
                </table>
            </form>
        </div>
    );
}

export default Admin;