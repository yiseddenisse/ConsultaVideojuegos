import React, { useContext } from "react";
//Con Link y NavLink vamos a poder navegar entre las diferentes páginas utilizando el Router de React.
import {Link, NavLink } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";

export const Navbar = () =>{
    //Recuperar el usuario
    const {username} = useContext(UserContext);
    return (
        <nav className = "navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className = "navbar-brand"
                to = "/"
            >
                Gamebook
            </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">
            {/*
            La propiedad 'to' sirve para indicar el route al que nos vamos a dirigir al hacer clic en la liga y con esto
            identifica qué componente
            va cargar para ser mostrado en la página. La propiedad 'exact' indica que debe ser la ruta exacta la que se
            tiene que indicar y enviar al Router.
            */}
            <NavLink
            className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
            exact="true"
            to="/GameCollectionApp"
            >
            Agregar juego
            </NavLink>
            <NavLink
            className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
            exact="true"
            to="/BusquedaGenero"
            >
            Buscar género
            </NavLink>
            <NavLink
            className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
            exact="true"
            to="/BuscarColeccion"
            >
            Mi buscador
            </NavLink>
            </div>
            </div>
            <div style={{color: "#ffd700", marginLeft:"850px"}} >{username}</div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className = "navbar-nav ml-auto">
                    <NavLink
                    className={({isActive}) => isActive ? "active": "nav-item nav-link"}
                    exact = "true"
                    to = "/login"
                    >
                        Salir
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}