import { useState, useEffect } from 'react';

import { db } from './../../firebase';
import { getDoc, doc } from 'firebase/firestore';

import Loading from './../Utilities/Loading';
import { toast } from 'react-toastify';

import Seguimiento from './Segumiento';

const SearchOrder = () => {
    const [nroOrden, setNroOrden] = useState('');
    const [loading, setLoading] = useState(false);
    const [dataOrden, setDataOrden] = useState(null);

    const searchOrder = async (orden) => {
        setLoading(true);
        if (orden.length > 0) {
            const buscarOrden = await getDoc(doc(db, 'orders', orden));

            if (buscarOrden.data()) {
                setNroOrden(orden);
                setDataOrden(buscarOrden.data());
            } else {
                setNroOrden('No se encontró la orden');
            }

            setLoading(false);
        }
    };

    useEffect(() => {
        const readClipboard = async () => {
            try {
                const clipboard = await navigator.clipboard.readText();

                if (/^[0-9a-zA-Z]+$/.test(clipboard)) {
                    setNroOrden(clipboard);
                    searchOrder(clipboard);
                }
            } catch (error) {
                toast.error('No se pudo leer el contenido del portapapeles.');
            }
        };

        readClipboard();
    }, []);

    return (
        <div className="flex flex-col items-center w-screen">
            <h2 className="text-3xl font-bold text-center [color:#4a3933] underline p-8">Seguimiento de compra</h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    const data = Object.fromEntries(new FormData(e.target).entries());

                    searchOrder(data['nro-orden']);
                }}
                className="flex flex-col xs:flex-row items-center "
                action="">
                <div className="mx-3 mb-5 xs:mb-0">
                    <input
                        defaultValue={nroOrden === 'No se encontró la orden' ? '' : nroOrden}
                        name="nro-orden"
                        required
                        className="min-w-[250px] w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        type="text"
                        placeholder="Nro° de orden"
                    />
                </div>

                <div className="mx-3 [background-color:#4a3933] [color:#ebecee] rounded-lg hover:opacity-90 font-bold px-4 py-2 mb-12 xs:mb-0">
                    <button>Consultar</button>
                </div>
            </form>

            <section className="flex w-full xs:p-12">
                {!loading ? (
                    dataOrden ? (
                        <article className="w-full">
                            <Seguimiento nroOrden={nroOrden} dataOrden={dataOrden} />
                        </article>
                    ) : (
                        <article className="flex items-center">
                            {nroOrden && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                            <b className="border-none m-3 text-xl">{nroOrden}</b>
                        </article>
                    )
                ) : (
                    <Loading texto="Buscando orden" />
                )}
            </section>
        </div>
    );
};

export default SearchOrder;
