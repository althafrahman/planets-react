import React from 'react'
import logo from '../logo.svg';
import "./styles.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div>

            {/* Nav bar component */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src = {logo} className="planet-img" /> Planet World</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/planets">Planets</Link>
                        <Link className="nav-item nav-link active" to="/favorites">Favorites</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
