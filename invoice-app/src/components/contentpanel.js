
import React, { useState } from "react";
import './contentpanel.css'
import CreateInvoiceForm from "./createinvoiceform";


const ContentPanel = (props) =>{
    let form;
    if(props.whichForm === "newInvoice"){
        //tu trzeba bedzie zrobic render forma
        form = <CreateInvoiceForm></CreateInvoiceForm>
    }else{
        form = <div>Tego nie powinno byc</div>
    }

    return(
        <div className="container">
            {form}
            <div className="darker-background" onClick={props.switchShowSidePanel}></div>
        </div>

    );
}

export default ContentPanel