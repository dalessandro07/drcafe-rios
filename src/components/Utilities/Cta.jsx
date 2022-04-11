import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import Loading from './Loading';

const Cta = () => {
    const [productosConOferta, setProductosConOferta] = useState([]);
    const [ofertaMasAlta, setOfertaMasAlta] = useState(0);
    const [productoConMasOferta, setProductoConMasOferta] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const getOfertas = async () => {
            const busquedaOfertas = await getDocs(collection(db, 'productos'));

            const productosConOferta = busquedaOfertas.docs.filter((producto) => producto.data().oferta);
            const dataProductos = productosConOferta.map((producto) => producto.data());

            setProductosConOferta(dataProductos);

            const ofertaMasAlta = dataProductos.reduce((oferta, producto) => {
                if (producto.oferta > oferta) {
                    return producto.oferta;
                }
                return oferta;
            }, 0);

            const productoConOfertaMasAlta = dataProductos.find((producto) => producto.oferta === ofertaMasAlta);
            setProductoConMasOferta(productoConOfertaMasAlta);

            setOfertaMasAlta(Number(ofertaMasAlta.toString().substring(2)));

            setLoading(false);
        };

        getOfertas();
    }, []);

    return (
        <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
            {!loading ? (
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                    <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
                        <div>
                            <p className="text-xl lg:text-3xl font-semibold leading-9 text-gray-800">Hasta {ofertaMasAlta}% de descuento este mes</p>
                        </div>
                        <div className="mt-4 lg:w-4/5 xl:w-3/5">
                            <p className="text-base leading-6 text-gray-600">
                                Aprovecha hasta {ofertaMasAlta}% de descuento en los productos seleccionados: <b>{productosConOferta.map((producto) => producto.nombre).join(', ')}</b>.
                            </p>
                            <p className="text-base leading-6 text-gray-600">
                                Ingresando el cupón <b>{`${new Date().toLocaleString('es-ES', { month: 'long' }).toUpperCase()}${new Date().getFullYear()}`}</b>. Aplican términos y condiciones.
                            </p>
                        </div>
                        <div className="mt-16 w-full">
                            <Link to={productosConOferta.length > 0 ? `/productos/${productoConMasOferta.categoria}/${productoConMasOferta.id}` : '/productos'}>
                                <button className="px-4 bg-[#4a3933] flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                                    <p className="text-xl font-medium leading-5">
                                        Ver más <span className="text-xs font-extralight">mayor oferta</span>
                                    </p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row jusitfy-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0 w-full h-full lg:w-1/2">
                        <div className="w-64">
                            <Link to={`/productos/${productosConOferta[0].categoria}/${productosConOferta[0].id}`}>
                                <img className="hidden lg:block w-full h-80 object-cover rounded-md cursor-pointer" src={productosConOferta[0].img} alt={productosConOferta[0].nombre} />
                                <img className="sm:w-auto lg:hidden px-10 w-full h-80 object-cover rounded-md cursor-pointer" src={productosConOferta[0].img} alt={productosConOferta[0].nombre} />
                            </Link>
                        </div>

                        <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                            <div className="h-36">
                                <Link to={`/productos/${productosConOferta[1].categoria}/${productosConOferta[1].id}`}>
                                    <img className="hidden lg:block object-cover w-full h-full cursor-pointer" src={productosConOferta[1].img} alt={productosConOferta[1].nombre} />
                                    <img className="w-80 sm:w-auto lg:hidden h-full cursor-pointer" src={productosConOferta[1].img} alt={productosConOferta[1].nombre} />
                                </Link>
                            </div>
                            <div className="h-36">
                                <Link to={`/productos/${productosConOferta[2].categoria}/${productosConOferta[2].id}`}>
                                    <img className="hidden lg:block object-cover w-full h-full cursor-pointer" src={productosConOferta[2].img} alt={productosConOferta[2].nombre} />
                                    <img className="w-80 sm:w-auto lg:hidden h-full cursor-pointer" src={productosConOferta[2].img} alt={productosConOferta[2].nombre} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading texto="Cargando ofertas" />
            )}
        </div>
    );
};

export default Cta;
