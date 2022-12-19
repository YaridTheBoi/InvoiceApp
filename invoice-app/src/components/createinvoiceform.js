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

                <div className="address-strip">
                    <div>
                        <label for='from-city'>City</label>
                        <input id='from-city' type={'text'} ></input>
                    </div>

                    <div>
                        <label for='from-postcode'>Post Code</label>
                        <input id='from-postcode' type={'text'} ></input>
                    </div>

                    <div>
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

                <div className="address-strip">
                    <div>
                        <label for='to-city'>City</label>
                        <input id='to-city' type={'text'} ></input>
                    </div>

                    <div>
                        <label for='to-postcode'>Post Code</label>
                        <input id='to-postcode' type={'text'} ></input>
                    </div>

                    <div>
                        <label for='to-country'>Country</label>
                        <input id='to-country' type={'text'}></input>
                    </div>


                </div>
            </form>

        </div>
    )
}

export default CreateInvoiceForm