import React from 'react';
import logo from './logo-la-voz-comercial.svg'
import '../App.css';

class NavBar extends React.Component{
    render(){
        return(
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
                        <li><a href="#">Audienciass</a></li>
                    </ul>
                </div>
            </nav>
            </header>

        )
    }
}


export default NavBar;