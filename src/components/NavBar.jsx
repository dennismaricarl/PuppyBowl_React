import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
        <>
        <div id="navbar">
            <Link to="/">All Players</Link>
            <Link to="/players/:id">Single Player</Link>
        </div>
        
        </>
    )
}



export default NavBar;