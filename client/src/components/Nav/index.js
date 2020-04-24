import React from "react";
import './style.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul className="list-inline">
                    <li className="list-inline-item">Google Books</li>
                    <li className="list-inline-item">
                        <Link to="/search"><h4>Search</h4></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/saved"><h4>Saved</h4></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;


