import {React, useState} from 'react'
import Axios from 'axios'

const CandyOrdersForm =()=> {
    const url ="http://localhost:3001/api/candy_orders/create"
    const [data, setData] = useState({
        order_description: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            order_description: data.order_description
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
            <h1 className="checkout-header">Make an Order</h1>
            <textarea onChange={(e) => handle(e)} id="order_description" className="order_description" value={data.order_description} type="text" placeholder='Ex: "I would like to order 7 Twix and 30 Kit Kat"' cols="53" rows="10"  required></textarea>
            <button type='submit' className="order-button">Save Order</button>
        </form>
    )
}

export default CandyOrdersForm