import React from 'react'
import EmailForm from './EmailForm'
import { Link } from 'react-router-dom'

const Footer =()=> {
    return(
    <footer className="footer" id="footer">
        <section className="container-fluid top-footer">
            <div className="row">
                <div className="col-md-4">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <Link to="/" className="footer-link">home</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/Shop" className="footer-link">shop</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/About" className="footer-link">about</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/Checkout" className="footer-link">checkout</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h1 className="footer-header">Newsletter</h1>
                    <EmailForm />
                </div>
                <div className="col-md-4">
                    <h1 className="footer-header">Contact Us</h1>
                    <p className="company-number">1(800)-SWEET-TOOTH</p>
                    <Link to="#link" className="footer-logo-link">
                        <img src="./media/instagram-logo.png" alt="instagram logo" className="social-logo" />
                    </Link>
                    <Link to="#link" className="footer-logo-link">
                        <img src="./media/facebook-logo.png" alt="facebook logo" className="social-logo" />
                    </Link>
                </div>
            </div>
        </section>
        <section className="container-fluid main-footer">
            <p className="main-footer-text">Web Design by Paxton S. Green, II</p>
            <p className="main-footer-text">&copy; 2022, Sweet Tooth</p>
        </section>
    </footer>
    )
}

export default Footer