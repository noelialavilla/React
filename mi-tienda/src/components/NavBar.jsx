import React from "react";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div className="row col-12">
            <nav className="navbar navbar-expand-sm navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <div className="navbar-nav ">
                        <a className="nav-link flex col-4" href="./index.html">Inicio</a>
                        <a className="nav-link flex col-4" href="">Nosotros</a>
                        <a className="nav-link flex col-4" href="">Productos</a>
                        <a className="nav-link flex col-4" href="">Contacto</a>
                        <a className="nav-link flex col-4" href="">SALE</a>
                        <CartWidget/>
                    </div>

                </div>
            </nav>
        </div>

    )
}


export default NavBar;