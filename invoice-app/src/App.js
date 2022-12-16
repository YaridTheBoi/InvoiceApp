import './App.css';
import React, { useState }  from 'react';
import Navbar from './components/navbar.js'
import MainPanel from './components/mainPanel.js'
const App = () =>  {
  const [showSidePanel, setShowSidePanel]= useState(false);

  const switchShowSidePanel = () =>{
    setShowSidePanel(!showSidePanel)
    console.log(showSidePanel);
  }
  
  return (


    <div className="App">
      <Navbar></Navbar>
      <div className='app-zone'>

        <MainPanel switchState={switchShowSidePanel}></MainPanel>
      </div>
    </div>
    
  );
}

export default App;
