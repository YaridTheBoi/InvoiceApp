import React, { useState } from "react";
import './dropdownfilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
const DropDownFilter = () =>{

    const [currentFiler, setCurrentFilet] = useState("Filter by status");
    const [filterArray, setFilterArray] = useState(["Draft", "Pending", "Paid"]);
    const filters= filterArray.map((filter) => <div className="dropdown-item">
                                                {filter}
                                                
                                            </div>)
    return(

        <div className="dropdown">
            <div className="dropdown-filter">
                {currentFiler}
                <FontAwesomeIcon icon={faAngleDown} className='my-icon'></FontAwesomeIcon>
            </div>

            <div className="dropdown-content">
                {filters}
            </div>
        </div>


    );
}
export default DropDownFilter;