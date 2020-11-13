import React from 'react';
import logo from './img/logo-la-voz-comercial.svg'
import '../App.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar({itemsCarrito}) {
    return (

            <header className="App-header">
            <nav  className="navbar navbar-inverse navbar-fixed-top">
                <div  className="container-fluid">
                    <div className="navbar-header">
                      <Link to='/'><img className="logo-img"  src={logo} /> 
                        </Link>     </div>
                    <ul className="nav navbar-nav">
                        <li className="liNavbar"><Link to='/'><a href="#">Productos</a></Link></li>
                        <li className="liNavbar"><a href="#">Soluciones publicitarias</a></li>
                        <li className="liNavbar"><a href="#">Media Kit</a></li>
                        <li className="liNavbar">Audiencias</li>
                        <li><Link to="/carrito"><CartWidget itemsCarrito={0} /> </Link></li> 
                    </ul>
                </div>
            </nav>
            </header>  
        );
    }


export default NavBar;