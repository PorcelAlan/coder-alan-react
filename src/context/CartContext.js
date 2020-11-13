import React, { useContext, useState } from 'react';
import Cart from '../components/Cart';

export const CartContext = React.createContext([]);

// export function useCartContext = () => useContext(CartContext);

 export default function CartContextProvider ({defaultValue= [], children}) {

    const [cart, setCart] = useState([]);
    const [cantidadItems,setCantidadItems] = useState(0); 

      

    function addItemCart (Item, cantidad) {
        const setItem = () => {Item.cantidad = cantidad};
        setItem(cantidad);
        setCart([...cart, Item]);
        setCantidadItems(cantidadItems + cantidad);
    }

    function getCantidadItems() {
        return cantidadItems;
    }



    function removeItemCart (Item) {
        console.log(cart);
    }

    function clearCart (idItem) {
        setCantidadItems(0);
        setCart([]);
    }

    return <CartContext.Provider value={{getCantidadItems, addItemCart,removeItemCart,clearCart,cart}}>

            {children}

    </CartContext.Provider>



}