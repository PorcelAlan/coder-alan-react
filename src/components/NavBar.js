import React from 'react';
import logo from './img/logo-la-voz-comercial.svg'
import '../App.css';
import CartWidget from './CartWidget';

function NavBar({itemsCarrito}) {
    return (
            
            <header className="App-header">
            <nav  class="navbar navbar-inverse navbar-fixed-top">
                <div  class="container-fluid">
                    <div class="navbar-header">
                        <a style={{padding: 0}} class="navbar-brand"  href="#"><img className="logo-img"  src={logo} /> </a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Productos</a></li>
                        <li><a href="#">Soluciones publicitarias</a></li>
                        <li><a href="#">Media Kit</a></li>
                        <li><a href="#">Audiencias</a></li>
                        <li><CartWidget itemsCarrito={0} /></li> 
                    </ul>
                </div>
            </nav>
            </header>  
        );
    }


export default NavBar;