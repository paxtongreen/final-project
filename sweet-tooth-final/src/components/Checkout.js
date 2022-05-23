import React from 'react'
import ShippingForm from './ShippingForm'
import PaymentForm from './PaymentForm'
import CandyOrdersForm from './CandyOrdersForm'

const Checkout = () => {
    return (
        <main className="main checkout-main" id="main">
            <div className="container">
                <div className="col-md-6 checkout-form">
                    <CandyOrdersForm/>
                    <ShippingForm />
                    <PaymentForm />
                </div>
            </div>
        </main>
    )
}

export default Checkout