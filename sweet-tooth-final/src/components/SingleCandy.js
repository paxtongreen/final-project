import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useParams } from 'react-router-dom'

const SingleCandy =()=> {
    const [candy, setCandy] = useState({})
    const id = useParams().id

    useEffect(() => {
        axios.get(`http://localhost:3001/api/candy/${id}`)
            .then(res => {
                setCandy(res.data)
            })
            .catch(error => console.log(error))
    }, [])
    
    return(
        <main className="main single_main" id="main">
        <div className="col-md-3 product-card single-product-card">
            <h1 className='candy_name'>{candy.candy_name}</h1>
            <Link to="/Shop">
                <img src={candy.picture} alt="candy img" className="img-fluid candy_img" />
            </Link>
            <p className='candy-price'>${candy.price}</p>
            <p className='single-text'>{candy.candy_description}</p>
        </div>
        </main>
    )
}

export default SingleCandy