import React from 'react'
import './mainPanel.css'
import Button1 from './button1'
const MainPanel= () =>{
    return(

        <div className='main-panel'>
            <div className='my-invoices'>
                <div className='title'>Invoice</div>
                <div className='stats'> There is currently xD invoices</div>
            </div>

            <div className='functionalities'>
                <Button1 buttonText="Add invoice"></Button1>
            </div>
        </div>
    );
}

export default MainPanel;