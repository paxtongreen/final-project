import {React, useState} from 'react'
import Axios from 'axios'

const PaymentForm =()=> {
    const url ="http://localhost:3001/api/payment/create"
    const [data, setData] = useState({
        card_number: "",
        name_on_card: "",
        expiration_date: "",
        cvv: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            card_number: data.card_number,
            name_on_card: data.name_on_card,
            expiration_date: data.expiration_date,
            cvv: data.cvv
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
        <form onSubmit={(e)=> submit(e)}>
            <h1 className="checkout-header">Payment Information</h1>
            <input onChange={(e) => handle(e)} id="card_number" value={data.card_number} type="text" placeholder="Card Number" required />
            <input onChange={(e) => handle(e)} id="name_on_card" value={data.name_on_card} type="text" placeholder="Name on Card" required />
            <input onChange={(e) => handle(e)} id="expiration_date" value={data.expiration_date} type="text" placeholder="Expiration Date" required />
            <input onChange={(e) => handle(e)} id="cvv" value={data.cvv} type="text" placeholder="cvv" required />
            <button type='submit' className="order-button">Place Order</button>
        </form>
    )
}

export default PaymentForm