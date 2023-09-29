import React from "react";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div class="row col-12">
            <nav class="navbar navbar-expand-sm navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <div class="navbar-nav ">
                        <a class="nav-link flex col-4" href="./index.html">Inicio</a>
                        <a class="nav-link flex col-4" href="">Nosotros</a>
                        <a class="nav-link flex col-4" href="">Productos</a>
                        <a class="nav-link flex col-4" href="">Contacto</a>
                        <a class="nav-link flex col-4" href="">SALE</a>
                        <CartWidget/>
                    </div>

                </div>
            </nav>
        </div>

    )
}


export default NavBar;