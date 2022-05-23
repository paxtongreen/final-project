import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header =()=> {
    return(
    <header className="header" id="header">
        <section className="top-header container-fluid">
            <span className="store-deal">Free shipping for our grand opening!</span>
        </section>
        <section className="main-header container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="mini-logo">
                        <Link to="/" className="mini-logo-link">S</Link>
                    </h1>
                </div>
                <div className="col-md-4">
                    <h1 className="logo">
                        <Link to="/" className="logo-link">Sweet Tooth</Link>
                    </h1>
                </div>
                <div className="col-md-4">
                    <Navbar />
                </div>
            </div>
        </section>
    </header>
    )
}

export default Header