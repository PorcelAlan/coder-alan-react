import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function botonFinalizar ({text,cantidad}) {

    const string = '/carrito/';

    return <Link to={string}><button style={{display: 'none'}} className='botonFinalizar'>{text} </button></Link> 
}

   export default botonFinalizar;