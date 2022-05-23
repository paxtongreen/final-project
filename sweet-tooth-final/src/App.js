import { Outlet, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import About from './components/About'
import Shop from './components/Shop'
import Checkout from './components/Checkout'
import SingleCandy from './components/SingleCandy'


const App =()=> {    
  const [candy, setCandy] = useState([]);
  useEffect(() => {
  fetchCandy();
  }, [])

const fetchCandy = () => {
  axios
      .get('http://localhost:3001/api/candy/')
      .then((res)=> {
          setCandy(res.data);
      })
      .catch((err) => {
          console.log(err)
      });
}
  return(
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' exact element={<Main />} />
        <Route path='/about' element={<About/>} />
        <Route path='/shop' element={<Shop props={candy}/>} />
        <Route path='/shop/:id' element={<SingleCandy />} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      <Footer /> 
      <Outlet />
    </div>
  );
}

export default App;