import React , {useState}from "react";
import "./select1.css"
const Select1 = () =>{

    const [selectedValue, setSelectedValue]= useState("Net 1 Day")
    const [showContent, setShowContent] = useState(false)



    const parentClick = () =>{
        setShowContent(!showContent);
        console.log(showContent);
    }


    let optionsContent;

    if(showContent){
        optionsContent = <div className="custom-option">
            <div className="custom-option-item"> Twoja stara</div>
        </div>
    }else{
        optionsContent=<div></div>
    }


    return (
    <div>
        <div id='payment-terms' className="custom-select" tabIndex={'0'} onClick={parentClick}>
            {selectedValue}
        </div>
        {optionsContent}
    </div>
    )
}

export default Select1