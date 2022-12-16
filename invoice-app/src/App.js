import './App.css';
import React, { useState }  from 'react';
import Navbar from './components/navbar.js'
import MainPanel from './components/mainPanel.js'
import ContentPanel from './components/contentpanel'
const App = () =>  {
  const [showSidePanel, setShowSidePanel]= useState(false);
  const [filterArray, setFilterArray] = useState([{name:"Draft", isSelected:false}, {name:"Pending", isSelected:false}, {name:"Paid", isSelected:false}]);
  
  const [whichForm, setWhichForm]= useState();

  const handleCheckFilter = event =>{

    const nextFilterArray = filterArray.map((obj) =>{
        if(obj.name === event.currentTarget.id){
            return{name:event.currentTarget.id, isSelected:event.currentTarget.checked}
        }
        return obj;
    });
    setFilterArray(nextFilterArray);
  };


  const switchShowSidePanel = () =>{
    setShowSidePanel(!showSidePanel)
    console.log(showSidePanel);
  }
    
  const newInvoiceClick = () =>{
    switchShowSidePanel();
    setWhichForm("newInvoice");
  }

  let renderContentPanel;

  if(showSidePanel){
    renderContentPanel = <ContentPanel switchShowSidePanel={switchShowSidePanel} whichForm={whichForm}></ContentPanel>
  }
  else{
    renderContentPanel=<div></div>
  }

  return (


    <div className="App">
      <Navbar></Navbar>
      <div className='app-zone'>
        {renderContentPanel}
        <MainPanel newInvoiceClick={newInvoiceClick} handleCheckFilter={handleCheckFilter} filterArray={filterArray}></MainPanel>
        
      </div>
    </div>
    
  );
}

export default App;
