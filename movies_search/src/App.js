import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="titleBar">
        <table>
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="movieDB_icon.svg"/>
              </td>
              <td>
                  <h3>MoviesDB Search</h3>
              </td>
              <td width="8"/>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
