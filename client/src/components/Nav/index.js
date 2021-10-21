import React from "react";
import './style.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul className="list-inline">
                    <li className="list-inline-item head">Google Books</li>
                    <li className="list-inline-item">
                        <Link to="/search"><h5>Search</h5></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/saved"><h5>Saved</h5></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;


