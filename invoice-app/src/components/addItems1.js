import React , {useState}from "react";
import "./addItems1.css"
import Button2 from "./button2";

const AddItems1 = () =>{
    const addItemClick = () =>
    {
        console.log("dodaje nowy item")
    }
    return(
        <div className="add-items">
            <Button2 onClick={addItemClick} buttonText='+Add New Item'></Button2>
        </div>
    );
}

export default AddItems1;