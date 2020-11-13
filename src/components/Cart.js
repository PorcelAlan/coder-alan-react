import { findAllByDisplayValue } from '@testing-library/react';
import React, {useEffect, useState, Component, useContext} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import '../App.css';
import {CartContext} from '../context/CartContext';


function Cart () {

    const {cart,removeItemCart,clearCart} = useContext(CartContext);  
    

    const itemsComprados = useParams().itemsComprados;

    const estiloCajaItemsComprados = {  
        marginTop: 30,
        color: 'black',
        fontSize: 30,
        border: '3px solid black',
        width: 1500,
        height: 130,
        display: 'block',
        marginLeft: 100
    }
    const elementosItemsComprados = {  
        marginLeft: 40,
        display: 'inline',
        marginTop: 14
    }



        return(
            <div style={{marginBottom:200}}>
                <h1 className="carrito"> Este es mi carrito </h1>
                <h2> Los items comprados fueron </h2> 
                {cart.map(p =>  <div style={estiloCajaItemsComprados}><p style={elementosItemsComprados}> 
                <b>Nombre: </b> {p.name}
                <b style={elementosItemsComprados}>Cantidad: </b> {p.cantidad}
                <p style={elementosItemsComprados}><b>Precio: </b>{p.price} </p>
                <img style={ {marginLeft: 40, width:100, height: 100}} src={p.img} /> 
                <p style={elementosItemsComprados}><b>Valor: </b> {p.cantidad * p.price}</p>
                <button id={p.id} style={elementosItemsComprados}>Quitar</button>
                 </p></div> ) }
                 
                
                 <button style={{fontSize:30, marginTop:100}} onClick={clearCart}>Limpiar Carrito</button> 
            </div>

        )
    }


export default Cart;

// <img style={{width:300, height: 300}} src={p.img} />