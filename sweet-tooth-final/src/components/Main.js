import React from 'react'
import { Link } from 'react-router-dom'

const Main =()=> {
    return(
    <main className="main home-main" id="main">
        <section className="container section1">
            <img src="./media/test3.jpg" alt="home image" className="home-img" />
            <div className="home-img-block">
                <h1 className="logo-text">Sweet Tooth</h1>
                <h2 className="home-img-text">Where your treats are one click away!</h2>
                <div className="shop-block">
                    <Link to="/Shop" className="shop-link">SHOP</Link>
                </div>
            </div>
        </section>
        <section className="container section2">
            <div className="row">
                <div className="col-md-6 motto-block">
                    <h1>Have a little or have a lot! No portion size is wrong at Sweet Tooth!</h1>
                </div>
                <div className="col-md-6 about-block">
                    <p>We pride ourselves on our quality candy and excellent customer service! We also ship our candy worldwide!</p>
                    <Link to="/About" className="about-link">Learn More</Link>
                </div>
            </div>
        </section>
        <section className="container">
            <div className="row review-block">
                <div className="col-md-4">
                    <p className="review-text">Best candy I have ever eaten in my life. Next time I'm ordering one of everything!</p>
                    <p>- <span className="reviewer">Billy Bob</span></p>
                </div>
                <div className="col-md-4">
                    <p className="review-text">This candy made me shout for joy! I've never been disappointed by Sweet Tooth!</p>
                    <p>- <span className="reviewer">John Doe</span></p>
                </div>
                <div className="col-md-4">
                    <p className="review-text">I ate 12 pieces of jelly beans and it cured all of my ailments!</p>
                    <p>- <span className="reviewer">Ellen Keller</span></p>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Main