import React from 'react';

const Admin = () => {
    return (
        <div style = {{padding:"5%", textAlign:"center"}}>
            <form method = "post">
                <table style = {{textAlign:"center"}}>
                <tr>
                    <th><label for = "ID">ID: </label></th>
                    <td><input name = "ID"></input></td>
                </tr>
                <tr>
                    <th><label for = "Chinese">Chinese: </label></th>
                    <td><input name = "Chinese"></input></td>
                </tr>
                <tr>
                    <th><label for = "English">English: </label></th>
                    <td><input name = "English"></input></td>
                </tr>
                <tr>
                    <th><label for = "Desc">Desc: </label></th>
                    <td><input name = "Desc"></input></td>
                </tr>
                <tr>
                    <th><label for = "Price">Price: </label></th>
                    <td><input name = "Price"></input></td>
                </tr>
                <tr style={{textAlign:"right"}}>
                    <td><button type = "submit">Submit</button></td>
                </tr>
                </table>
            </form>
        </div>
    );
}

export default Admin;