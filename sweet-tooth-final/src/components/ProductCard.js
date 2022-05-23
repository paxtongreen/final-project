import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCard =()=> {
    const [candy, setCandy] = useState([]);
        useEffect(() => {
        fetchCandy();
        }, [])

    const fetchCandy = () => {
        axios
            .get(`http://localhost:3001/api/candy/`)
            .then((res)=> {
                console.log(res);
                setCandy(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return(
    <>
    {candy.map((item) => (
        <div className="col-md-3 product-card" key={item.id}>
        <h1 className='candy_name'>{item.candy_name}</h1>
        <Link to={`/Shop/${item.id}`} >
            <img src={item.picture} alt="candy img" className="img-fluid candy_img" />
        </Link>
        <p className='candy-price'>${item.price}</p>
    </div>
    ))}
    </>
    )
}

export default ProductCard