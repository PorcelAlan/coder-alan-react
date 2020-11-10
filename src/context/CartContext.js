import React, { useContext, useState } from 'react';
import Cart from '../components/Cart';

export const CartContext = React.createContext([]);

// export function useCartContext = () => useContext(CartContext);

 export default function CartContextProvider ({defaultValue= ['alan','pepe'], children}) {

    const [cart, setCart] = useState(defaultValue);
  

    function add (idItem) {
        console.log('added');
    }

    function remove (idItem) {
        console.log('removed');
    }

    function clear (idItem) {
        console.log('removed');
    }

    return <CartContext.Provider value={['alan','pepe']}>

            {children}

    </CartContext.Provider>



}