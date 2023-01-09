import React , {useState}from "react";
import "./select1.css"
const Select1 = () =>{

    const [selectedValue, setSelectedValue]= useState("Net 1 Day")
    const [showContent, setShowContent] = useState(false)



    const parentClick = () =>{
        setShowContent(!showContent);
        console.log(showContent);
    }

    const itemClick = event =>{
        setSelectedValue(event.currentTarget.textContent);
        setShowContent(!showContent);
    }


    let optionsContent;

    if(showContent){
        optionsContent = 
        <div className="custom-option">
            <div className="custom-option-item" style={{borderTop: "0px"}} onClick={itemClick} tabIndex={'0'}> Net 1 Day</div>
            <div className="custom-option-item" onClick={itemClick} tabIndex={'0'}>Net 7 Days</div>
            <div className="custom-option-item" onClick={itemClick} tabIndex={'0'}>Net 14 Days</div>
            <div className="custom-option-item"style={{borderBottom: "0px"}} onClick={itemClick} tabIndex={'0'}>Net 30 Days</div>
        </div>
    }else{
        optionsContent=<div></div>
    }


    return (
    <div className="select">
        <div id='payment-terms' className="custom-select" tabIndex={'0'} onClick={parentClick}>
            {selectedValue}

            
        </div>
        {optionsContent}
    </div>
    )
}

export default Select1