import './App.css';
import React, { useState }  from 'react';
import Navbar from './components/navbar.js'
import MainPanel from './components/mainPanel.js'
const App = () =>  {
  const [showSidePanel, setShowSidePanel]= useState(false);
  const [filterArray, setFilterArray] = useState([{name:"Draft", isSelected:false}, {name:"Pending", isSelected:false}, {name:"Paid", isSelected:false}]);
  
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
  
  return (


    <div className="App">
      <Navbar></Navbar>
      <div className='app-zone'>

        <MainPanel switchShowSidePanel={switchShowSidePanel} handleCheckFilter={handleCheckFilter} filterArray={filterArray}></MainPanel>
      </div>
    </div>
    
  );
}

export default App;
