import React , {useState}from "react";
import "./select1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp, faCheck} from '@fortawesome/free-solid-svg-icons'
const Select1 = (props) =>{

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


    let optionsContent, icon;

    if(showContent){
        optionsContent = 
        <div className="custom-option">
            <div className="custom-option-item" style={{borderTop: "0px"}} onClick={itemClick} tabIndex={'0'}> Net 1 Day</div>
            <div className="custom-option-item" onClick={itemClick} tabIndex={'0'}>Net 7 Days</div>
            <div className="custom-option-item" onClick={itemClick} tabIndex={'0'}>Net 14 Days</div>
            <div className="custom-option-item"style={{borderBottom: "0px"}} onClick={itemClick} tabIndex={'0'}>Net 30 Days</div>
        </div>

        icon= <FontAwesomeIcon icon={faAngleUp} className='my-icon-select'></FontAwesomeIcon>;
    }else{
        optionsContent=<div></div>
        icon = <FontAwesomeIcon icon={faAngleDown} className='my-icon-select'></FontAwesomeIcon>;
    }


    return (
    <div className="select">
        <div id={props.divId} className="custom-select" tabIndex={'0'} onClick={parentClick}>
            {selectedValue}

            {icon}
        </div>
        {optionsContent}
    </div>
    )
}

export default Select1