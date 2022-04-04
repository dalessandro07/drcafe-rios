import { Link, useNavigate } from 'react-router-dom';
import { contexto } from '../../context/CartContext';
import { useContext, useState } from 'react';

import { motion } from 'framer-motion';

const Item = ({ producto }) => {
    const [isClicked, setIsClicked] = useState(false);
    const { addItem } = useContext(contexto);
    const navigateTo = useNavigate();

    let stairs = [];

    for (let i = 0; i < producto.estrellas; i++) {
        stairs.push(
            <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        );
    }

    const bgColor = {
        blue: 'bg-blue-200/50',
        red: 'bg-red-200/50',
        orange: 'bg-orange-200/50',
        violet: 'bg-violet-200/50',
    };

    return (
        <motion.div
            animate={{
                opacity: isClicked ? [1, 0.01, 1] : 1,
                transition: {
                    duration: 1,
                    ease: 'easeInOut',
                },
            }}
            className="flex flex-col max-w-sm bg-white m-4 grow rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link className={`flex justify-center overflow-hidden h-full ${bgColor[producto.color]}`} to={`/productos/${producto.categoria}/${producto.id}`}>
                <motion.img
                    whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: 1.5,
                            type: 'spring',
                        },
                    }}
                    className={`${producto.categoria === 'cafes' ? 'w-full' : 'w-auto'} rounded-t-lg object-cover max-h-[200px]`}
                    src={producto.img}
                    alt="producto"
                />
            </Link>

            <div className="flex flex-col px-5 py-5 pb-5 justify-center h-full">
                <div className="flex items-center justify-between">
                    <Link to={`/productos/${producto.categoria}/${producto.id}`}>
                        <h5 className="text-lg pb-4 font-semibold tracking-tight text-gray-900 dark:text-white">{producto.nombre}</h5>
                    </Link>

                    <div className="flex items-center mt-2.5 mb-5">
                        {stairs}
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{producto.estrellas}.0</span>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="text-sm font-bold text-gray-300 line-through dark:text-white">S/ {producto.precio + 10}</span>

                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">S/ {producto.precio}</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Disponibles: {producto.stock}</span>
                    </div>

                    <motion.button
                        animate={{
                            scale: isClicked ? [1, 0.01, 1] : 1,
                        }}
                        onClick={() => {
                            if (!isClicked) {
                                if (producto.stock > 0) {
                                    addItem(producto, 1, true);
                                    setIsClicked(true);
                                    setTimeout(() => {
                                        setIsClicked(false);
                                    }, 1000);
                                }
                            } else {
                                navigateTo('/carrito');
                            }
                        }}
                        className="[background-color:#4a3933] [color:#ebecee] my-4 rounded-lg hover:opacity-90 font-bold px-4 py-2">
                        <p>{isClicked ? <Link to="/carrito">Agregado ✅</Link> : 'Agregar al carrito'}</p>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Item;
