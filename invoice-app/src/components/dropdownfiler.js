import React, { useState } from "react";
import './dropdownfilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp, faCheck} from '@fortawesome/free-solid-svg-icons'
const DropDownFilter = (props) =>{

    const handleFilterClick = event =>{
        setShowFilter(!showFilter)
    }


    const filters= props.filterArray.map((filter) => <div className="dropdown-item" key={filter.name} >
                                                <input type="checkbox" id={filter.name} onChange={props.handleCheck} checked={filter.isSelected}></input>
                                                <span className="checkmark" id={filter.name} >
                                                    <FontAwesomeIcon icon={faCheck} className='my-check-dropdown'></FontAwesomeIcon>
                                                </span>
                                                {filter.name}
                                                
                                            </div>)

    const [showFilter, setShowFilter] = useState(false)

    let dropDownContent, icon;
    if(showFilter){
        dropDownContent=
        <div className="dropdown-content" id="dropContent">
            {filters}
        </div>;

        icon = <FontAwesomeIcon icon={faAngleUp} className='my-icon-dropdown'></FontAwesomeIcon>;
    }else{
        dropDownContent=<div></div>

        icon = <FontAwesomeIcon icon={faAngleDown} className='my-icon-dropdown'></FontAwesomeIcon>;
    }

    return(

        <div className="dropdown">
            <div className="dropdown-filter" onClick={handleFilterClick}>
                Filter by status
                {icon}
            </div>

            {dropDownContent}
        </div>


    );
}
export default DropDownFilter;