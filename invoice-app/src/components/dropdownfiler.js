import React, { useState } from "react";
import './dropdownfilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCheck} from '@fortawesome/free-solid-svg-icons'
const DropDownFilter = () =>{

    // const dropContent = document.getElementById(dropContent);
    const handleCheck = event =>{

        const nextFilterArray = filterArray.map((obj) =>{
            if(obj.name === event.currentTarget.id){
                return{name:event.currentTarget.id, isSelected:event.currentTarget.checked}
            }
            return obj;
        });
        setFilterArray(nextFilterArray);
        

    };

    const handleFilterClick = event =>{
        setShowFilter(!showFilter)
    }


    const [filterArray, setFilterArray] = useState([{name:"Draft", isSelected:false}, {name:"Pending", isSelected:false}, {name:"Paid", isSelected:false}]);
    const filters= filterArray.map((filter) => <div className="dropdown-item" key={filter.name} >
                                                <input type="checkbox" id={filter.name} onChange={handleCheck} checked={filter.isSelected}></input>
                                                <span className="checkmark" id={filter.name} >
                                                    <FontAwesomeIcon icon={faCheck} className='my-check-dropdown'></FontAwesomeIcon>
                                                </span>
                                                {filter.name}
                                                
                                            </div>)

    const [showFilter, setShowFilter] = useState(false)

    let dropDownContent;
    if(showFilter){
        dropDownContent=
        <div className="dropdown-content" id="dropContent">
            {filters}
        </div>
    }else{
        dropDownContent=<div></div>
    }

    return(

        <div className="dropdown">
            <div className="dropdown-filter" onClick={handleFilterClick}>
                Filter by status
                <FontAwesomeIcon icon={faAngleDown} className='my-icon-dropdown'></FontAwesomeIcon>
            </div>

            {dropDownContent}
        </div>


    );
}
export default DropDownFilter;