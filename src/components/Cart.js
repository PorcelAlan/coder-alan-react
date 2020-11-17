import React, {useContext} from 'react';
import '../App.css';
import {CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';


function Cart () {

    const {getCantidadItems, cart,removeItemCart,clearCart} = useContext(CartContext);  
    

    // const itemsComprados = useParams().itemsComprados;

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

    if (getCantidadItems() > 0) {
        return(
            <div style={{marginBottom:200}}>
                <h1 className="carrito"> Este es mi carrito </h1>
                <h2> Los items comprados fueron </h2> 
                {cart.map(p =>  <div style={estiloCajaItemsComprados}><p style={elementosItemsComprados}> 
                <b>Nombre: </b> {p.name}
                <b style={elementosItemsComprados}>Cantidad: </b> {p.cantidad}
                <p style={elementosItemsComprados}><b>Precio: </b>{p.price} </p>
                <img alt="IMG-Producto"style={ {marginLeft: 40, width:100, height: 100}} src={p.img} /> 
                <p style={elementosItemsComprados}><b>Valor: </b> {p.cantidad * p.price}</p>
                
                <button onClick={ () => removeItemCart(p)} style={elementosItemsComprados}>Quitar</button>
                 </p></div> ) }
                 
                 <button onClick={() => alert('Todavía no hago nada')}  style={{fontSize:30, marginTop:100}}>Finalizar compra</button>
                 <button style={{marginLeft: 30, fontSize:30, marginTop:100}} onClick={clearCart}>Limpiar Carrito</button> 
            </div>

        )}  if (getCantidadItems() === 0) {
        return <div> <h1 className="carrito"> ¡Aún no comprate nada! </h1> 
        <Link to='/'> <button style={{padding: 30, fontSize:40, marginTop:100}}>Quiero ver productos</button></Link> </div>
        }   
}


export default Cart;

// <img style={{width:300, height: 300}} src={p.img} />