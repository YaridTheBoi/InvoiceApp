import React from "react";
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

                <label for='from-city'>City</label>
                <input id='from-city' type={'text'}></input>

                <label for='from-postcode'>Post Code</label>
                <input id='from-postcode' type={'text'}></input>

                <label for='from-country'>Country</label>
                <input id='from-country' type={'text'}></input>

                <div className="form-section-title">Bill To</div>

                <label for='from-clientname'>Client's name</label>
                <input id='from-clientname' type={'text'}></input>

                <label for='from-clientmail'>Client's Email</label>
                <input id='from-clientmail' type={"email"}></input>

                <label for='from-street'>Street Address</label>
                <input id='from-street' type={'text'}></input>

                <label for='from-city'>City</label>
                <input id='from-city' type={'text'}></input>

                <label for='from-postcode'>Post Code</label>
                <input id='from-postcode' type={'text'}></input>

                <label for='from-country'>Country</label>
                <input id='from-country' type={'text'}></input>
            </form>

        </div>
    )
}

export default CreateInvoiceForm