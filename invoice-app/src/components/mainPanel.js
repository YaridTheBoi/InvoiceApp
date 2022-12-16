import React from 'react'
import './mainPanel.css'
import Button1 from './button1'
import DropDownFilter from './dropdownfiler'

const MainPanel= (props) =>{
    return(

        <div className='main-panel'>
            <div className='my-invoices'>
                <div className='title'>Invoice</div>
                <div className='stats'> There is currently xD invoices</div>
            </div>

            <div className='functionalities'>
                <DropDownFilter></DropDownFilter>
                <Button1 buttonText="New invoice" onClick={props.switchState}></Button1>
            </div>
        </div>
    );
}

export default MainPanel;