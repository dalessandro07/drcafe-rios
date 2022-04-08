import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Cta from './Cta';

const slogans = ['Comienza bien el día.', 'El café lo hace posible.', 'Una taza de motivación.', 'Tu día comienza aquí.', 'Date un respiro, bien cargado.', 'Despiértate de verdad.', 'Disfruta la vida, sorbo a sorbo.', 'Deja que tu mañana hable.'];

const cupones = [
    {
        id: 'cafeSemestre2022',
        descripcion: 'Cupón de descuento del 20% en todos los productos de la categoría Café.',
        fechaInicio: '2022-01-01',
        fechaFin: '2022-06-30',
    },
    {
        id: 'chocolateSemestre2022',
        descripcion: 'Cupón de descuento del 15% en todos los productos de la categoría Chocolate.',
        fechaInicio: '2022-01-01',
        fechaFin: '2022-06-31',
    },
    {
        id: 'PlinPago2022',
        descripcion: 'Cupón de descuento del 10% si usas Plin como medio de pago.',
        fechaInicio: '2022-01-01',
        fechaFin: '2022-06-30',
    },
    {
        id: 'YapePago2022',
        descripcion: 'Cupón de descuento del 5% si usas Yape como medio de pago.',
        fechaInicio: '2022-01-01',
        fechaFin: '2022-06-30',
    },
];

const Hero = () => {
    const [slogan, setSlogan] = useState(slogans[Math.floor(Math.random() * slogans.length)]);

    setTimeout(() => {
        setSlogan(slogans[Math.floor(Math.random() * slogans.length)]);
    }, 5000);

    return (
        <>
            <div className="flex flex-col index-page h-screen">
                <section className="bg-gray-900 text-gray-200 text-xs relative overflow-hidden whitespace-nowrap">
                    <motion.article
                        animate={{
                            x: ['100%', '-250%'],
                            transition: {
                                duration: 35,
                                ease: 'linear',
                                repeat: Infinity,
                            },
                        }}
                        className="text-xs">
                        {cupones.map((cupon) =>
                            cupon.fechaFin > new Date().toISOString().slice(0, 10) ? (
                                <b key={cupon.id} className="mx-4">
                                    {cupon.id + '-' + cupon.descripcion}
                                </b>
                            ) : (
                                ''
                            )
                        )}
                    </motion.article>
                </section>

                <motion.main
                    initial={{
                        translateX: -1000,
                        color: '#000',
                    }}
                    animate={{
                        translateX: [-500, 0],
                        color: '#fff',
                        transition: {
                            type: 'spring',
                            duration: 1,
                        },
                    }}
                    className="grow flex flex-col justify-end sm:justify-center m-8">
                    <b className="text-gray-100">DRCAFE</b>

                    <h1 className="text-5xl font-bold leading-normal text-gray-100">{slogan}</h1>

                    <Link to="/productos">
                        <motion.button
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, -5, 0],
                                transition: {
                                    duration: 0.5,
                                    repeatDelay: 2,
                                    repeat: Infinity,
                                },
                            }}
                            className="text-xl [background-color:#4a3933] [color:#ebecee] w-max my-4 rounded-lg font-bold p-2">
                            Ver Productos
                        </motion.button>
                    </Link>
                </motion.main>
            </div>
            <section>
                <h2 className="text-center text-3xl sm:text-3xl lg:text-4xl underline text-[#4a3933] font-bold mt-12 mb-6">¡Productos en oferta!</h2>
                <Cta />
            </section>
        </>
    );
};

export default Hero;
