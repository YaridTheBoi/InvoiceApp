import React from "react";
import Select1 from "./select1";
import './createinvoiceform.css'
//to musi przejac robienie ciemnego tla od content panel i wyjebac content panel
const CreateInvoiceForm =() =>{
    return(
        <div className="create-invoice-form-body">
            <div className="form-title">New Invoice</div>
            <form>
                
                <div className="form-section-title">Bill From</div>
                <label for='from-street'>Street Address</label>
                <input id='from-street' type={'text'}></input>

                <div className="input-strip">
                    <div className="input-strip-container">
                        <label for='from-city'>City</label>
                        <input id='from-city' type={'text'} ></input>
                    </div>

                    <div className="input-strip-container">
                        <label for='from-postcode'>Post Code</label>
                        <input id='from-postcode' type={'text'} ></input>
                    </div>

                    <div className="input-strip-container">
                        <label for='from-country'>Country</label>
                        <input id='from-country' type={'text'}></input>
                    </div>


                </div>


                <div className="form-section-title">Bill To</div>

                <label for='to-clientname'>Client's name</label>
                <input id='to-clientname' type={'text'}></input>

                <label for='to-clientmail'>Client's Email</label>
                <input id='to-clientmail' type={"email"}></input>

                <label for='to-street'>Street Address</label>
                <input id='to-street' type={'text'}></input>

                <div className="input-strip">
                    <div className="input-strip-container">
                        <label for='to-city'>City</label>
                        <input id='to-city' type={'text'} ></input>
                    </div>
                    <div className="input-strip-container"> 
                        <label for='to-postcode'>Post Code</label>
                        <input id='to-postcode' type={'text'} ></input>
                    </div>
                    <div className="input-strip-container">
                        <label for='to-country'>Country</label>
                        <input id='to-country' type={'text'}></input>
                    </div>
                </div>

                <div className="input-strip">
                    <div className="input-strip-container">
                        <label for='invoice-date'>Invoice Date</label>
                        <input id="invoice-date" type={'date'}></input>
                    </div>
                    <div className="input-strip-container">
                        <label for='payment-terms'>Payment Terms</label>
                        <Select1></Select1>
                    </div>
                </div>

                <label for='project-description'>Project Description</label>
                <input id='project-description' type={'text'}></input>

            </form>

        </div>
    )
}

export default CreateInvoiceForm