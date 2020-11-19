import React, {useEffect, useState} from 'react';
import logo from './img/logo-la-voz-comercial.svg'
import '../App.css';
import CartWidget from './CartWidget';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBar({itemsCarrito}) {

const [categoria, setCategoria] = useState(useParams().categoria);

const [miCategoria, cambioMiCategoria] = useState();




    return (

            <header className="App-header">
            <nav  className="navbar navbar-inverse navbar-fixed-top">
                <div  className="container-fluid">
                    <div className="navbar-header">
                      <Link to='/'><img alt='LVI' className="logo-img"  src={logo} /> 
                        </Link>     </div>
                    <ul className="nav navbar-nav">
                        <li className="liNavbar"><Link to='/'>Productos</Link></li>
                        <li className="liNavbar"><Link to='/microfonos'>Micrófonos</Link></li>
                        <li className="liNavbar"><Link to='/auriculares'>Auriculares</Link></li>
                        <li><Link to="/carrito"><CartWidget itemsCarrito={0} /> </Link></li> 
                    </ul>
                </div>
            </nav>
            </header>  
        );
    }


export default NavBar;