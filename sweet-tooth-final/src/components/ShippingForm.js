import {React, useState} from 'react'
import Axios from 'axios'

const ShippingForm =()=> {
    const url ="http://localhost:3001/api/shipping/create"
    const [data, setData] = useState({
        fName: "",
        lName: "",
        shipping_address: "",
        shipping_residence: "",
        country: "",
        shipping_state: "",
        city: "",
        zip: "",
        phone: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            fName: data.fName,
            lName: data.lName,
            shipping_address: data.shipping_address,
            shipping_residence: data.shipping_residence,
            country: data.country,
            shipping_state: data.shipping_state,
            city: data.city,
            zip: data.zip,
            phone: data.phone
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    
    return(
        <>
        <form onSubmit={(e)=> submit(e)}>
            <h1 className="checkout-header">Shipping Information</h1>
            <input onChange={(e) => handle(e)} id="fName" value={data.fName} type="text" placeholder="First Name" required />
            <input onChange={(e) => handle(e)} id="lName" value={data.lName} type="text" placeholder="Last Name" required />
            <input onChange={(e) => handle(e)} id="shipping_address" value={data.shipping_address} type="text" placeholder="Address" required />
            <input onChange={(e) => handle(e)} id="shipping_residence" value={data.shipping_residence} type="text" placeholder="Apartment, suite, etc. (optional)" />
            <input onChange={(e) => handle(e)} id="country" value={data.country} type="text" placeholder="Country/Region" required />
            <input onChange={(e) => handle(e)} id="shipping_state" value={data.shipping_state} type="text" placeholder="State" required />
            <input onChange={(e) => handle(e)} id="city" value={data.city} type="text" placeholder="City" required />
            <input onChange={(e) => handle(e)} id="zip" value={data.zip} type="text" placeholder="ZIP code" required />
            <input onChange={(e) => handle(e)} id="phone" value={data.phone} type="text" placeholder="Phone" required />
            <div>
            <button type='submit' className="order-button">SAVE INFORMATION</button>
            </div>
        </form>
        </>
    )
}

export default ShippingForm