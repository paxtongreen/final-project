import React from 'react'
import ProductCard from '../components/ProductCard'

const Shop =()=>{   
        return(
        <main className="main shop-main" id="main">
        <section className="nav-section">
            <h1 className="shop-header">All Products</h1>
        </section>
        <section className="products-section">
            <div className="container">
                <div className="row">
                    <ProductCard />
                </div>
            </div>
        </section>
    </main>
    )
}

export default Shop