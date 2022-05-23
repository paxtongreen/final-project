import {React, useState} from 'react'
import Axios from 'axios'

const EmailForm =()=> {
    const url ="http://localhost:3001/api/email/create"
    const [data, setData] = useState({
        email: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            email: data.email
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
            <input onChange={(e) => handle(e)} id="email" value={data.email} type="text" placeholder="Email" className="email-input" required />
            <button type='submit' className="submit-button email-submit">></button>
        </form>
    )
}

export default EmailForm