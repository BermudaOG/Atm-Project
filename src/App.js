import React from 'react';
import './App.css';
import Account from './Account';

function App() {
  return (
    <div className="App">
      <div className="left-column"></div>
      <header className="App-header">
        <Account />
      </header>
      <div className="right-column"></div>
    </div>
  );
}

export default App;
