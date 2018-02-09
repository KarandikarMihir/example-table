import React, { Component } from 'react';
import SuperTable from 'harbinger-super-table';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const columns = ['No.', 'Name', 'Email']
    const rows = [
      {
        id: 1,
        name: 'John',
        email: 'john@gmail.com'
      },
      {
        id: 2,
        name: 'Joe',
        email: 'joe@gmail.com'
      },
      {
        id: 3,
        name: 'Jane',
        email: 'jane@gmail.com'
      }
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Harbinger Super Table</h1>
        </header>
        <p className="App-intro">
          See the table in action!
        </p>
        <div className="docs">
          <h2>Usage</h2>
          <hr />
          <pre dangerouslySetInnerHTML={{ __html: `
            const columns = ['No.', 'Name', 'Email']
            const rows = [
              {
                id: 1,
                name: 'John',
                email: 'john@gmail.com'
              },
              {
                id: 2,
                name: 'Joe',
                email: 'joe@gmail.com'
              },
              {
                id: 3,
                name: 'Jane',
                email: 'jane@gmail.com'
              }
            ]
          ` }} />
          <pre dangerouslySetInnerHTML={{ __html: `
            &lt;SuperTable className="my-class" columns={columns} rows={rows} /&gt;
          ` }} />
        </div>
        <SuperTable columns={columns} rows={rows} />
      </div>
    );
  }
}

export default App;
