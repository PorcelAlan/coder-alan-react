import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo-la-voz-comercial.svg'
import '../App.css';

class NavBar extends React.Component{
    render(){
        return(
            <nav  class="navbar navbar-inverse navbar-fixed-top">
                <div  class="container-fluid">
                    <div class="navbar-header">
                        <a style={{padding: 0}} class="navbar-brand"  href="#"><img className="logo-img"  src={logo} /> </a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Productos</a></li>
                        <li><a href="#">Soluciones publicitarias</a></li>
                        <li><a href="#">Mediakit</a></li>
                        <li><a href="#">Audiencias</a></li>
                    </ul>
                </div>
            </nav>

        )
    }
}


export default NavBar;
ReactDOM.render(<NavBar />, document.getElementById('root'));