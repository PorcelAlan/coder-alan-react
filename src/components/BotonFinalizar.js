import React, {useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function botonFinalizar ({text,cantidad}) {

    const string = '/carrito/' + cantidad;

    return <Link to={string}><button style={{display: 'none'}} className='botonFinalizar'>{text} </button></Link>
}

   export default botonFinalizar;