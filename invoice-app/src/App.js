import './App.css';
import React, { Component }  from 'react';
import Navbar from './components/navbar.js'
import MainPanel from './components/mainPanel.js'
function App() {
  return (


    <div className="App">
      <Navbar></Navbar>
      <div className='app-zone'>

        <MainPanel></MainPanel>
      </div>
    </div>
    
  );
}

export default App;
