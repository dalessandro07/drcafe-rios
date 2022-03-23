import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const contexto = createContext();

const { Provider } = contexto;

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (producto, cantidad) => {
        const copiaCarrito = [...carrito];

        if (!isInCart(producto.id)) {
            setCarrito([...carrito, { producto, cantidad }]);
            toast.success(`¡Has agregado ${cantidad} unidades de ${producto.nombre} al carrito!`, { autoClose: 2000, position: 'top-left' });
            const totalParcial = producto.precio * cantidad;
            setTotal(parseFloat(total) + parseFloat(totalParcial));

            setCantidadTotal(cantidadTotal + cantidad);
        } else {
            const indexProd = carrito.findIndex((prod) => prod.producto.id === producto.id);

            if (copiaCarrito[indexProd].producto.stock >= copiaCarrito[indexProd].cantidad + cantidad) {
                copiaCarrito[indexProd].cantidad += cantidad;
                setCarrito(copiaCarrito);
                toast.success(`¡Has agregado ${cantidad} unidades de ${producto.nombre} al carrito!`, { autoClose: 2000, position: 'top-left' });
                const totalParcial = producto.precio * cantidad;
                setTotal(parseFloat(total) + parseFloat(totalParcial));

                setCantidadTotal(cantidadTotal + cantidad);
            } else {
                toast.error(`¡No hay suficientes! el stock es de: ${producto.stock} unidades`, { autoClose: 2000, position: 'top-left' });
            }
        }
    };

    const isInCart = (id) => {
        return carrito.some(({ producto }) => producto.id === id);
    };

    const removeItem = (id) => {
        const copiaCarrito = [...carrito];
        const indexProd = carrito.findIndex((prod) => prod.producto.id === id);

        setCantidadTotal(parseFloat(cantidadTotal) - parseFloat(copiaCarrito[indexProd].cantidad));
        setTotal((total - copiaCarrito[indexProd].producto.precio * copiaCarrito[indexProd].cantidad).toFixed(2));

        copiaCarrito.splice(indexProd, 1);
        setCarrito(copiaCarrito);
    };

    const clearCart = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    };

    return <Provider value={{ carrito, addItem, removeItem, clearCart, cantidadTotal, total }}>{children}</Provider>;
};

export default CartProvider;
