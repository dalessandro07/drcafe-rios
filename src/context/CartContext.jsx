import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const contexto = createContext();

const { Provider } = contexto;

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const carritoLocal = JSON.parse(localStorage.getItem('carrito'));
        const cantidadTotalLocal = JSON.parse(localStorage.getItem('cantidadTotal'));
        const totalLocal = JSON.parse(localStorage.getItem('total'));

        if (carritoLocal) {
            setCarrito(carritoLocal);
            setCantidadTotal(cantidadTotalLocal);
            setTotal(totalLocal);
        }
    }, []);

    const addItem = (producto, cantidad, alert) => {
        const copiaCarrito = [...carrito];

        if (!isInCart(producto.id)) {
            setCarrito([...carrito, { producto, cantidad }]);

            const totalParcial = producto.precio * cantidad;
            setTotal(parseFloat(total) + parseFloat(totalParcial));

            setCantidadTotal(cantidadTotal + cantidad);
        } else {
            const indexProd = carrito.findIndex((prod) => prod.producto.id === producto.id);

            if (copiaCarrito[indexProd].producto.stock >= copiaCarrito[indexProd].cantidad + cantidad) {
                copiaCarrito[indexProd].cantidad += cantidad;
                setCarrito(copiaCarrito);

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

        if (copiaCarrito.length === 0) {
            clearCart();
        }
    };

    const clearCart = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);

        localStorage.removeItem('carrito');
        localStorage.removeItem('cantidadTotal');
        localStorage.removeItem('total');
    };

    const increaseQuantity = (producto, cantidad) => {
        addItem(producto, cantidad, false);
    };

    const decreaseQuantity = (producto, cantidad) => {
        const copiaCarrito = [...carrito];

        const indexProd = carrito.findIndex((prod) => prod.producto.id === producto.id);

        if (copiaCarrito[indexProd].cantidad > 1) {
            copiaCarrito[indexProd].cantidad -= cantidad;
            setCarrito(copiaCarrito);

            setCantidadTotal(parseFloat(cantidadTotal) - parseFloat(cantidad));
            setTotal((total - copiaCarrito[indexProd].producto.precio * cantidad).toFixed(2));
        } else {
            removeItem(producto.id);
        }
    };

    if (carrito.length > 0) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        localStorage.setItem('cantidadTotal', cantidadTotal);
        localStorage.setItem('total', total);
    }

    return <Provider value={{ carrito, addItem, removeItem, clearCart, cantidadTotal, total, increaseQuantity, decreaseQuantity }}>{children}</Provider>;
};

export default CartProvider;
