const Seguimiento = ({ nroOrden, dataOrden }) => {
    const fecha = dataOrden.date.toDate().toLocaleString();
    const direccionDeEnvio = dataOrden.address + ', ' + dataOrden.city;
    const email = dataOrden.email;

    const items = dataOrden.items;

    return (
        <>
            <header className="flex justify-center sm:justify-start items-center pb-6 w-full border-b-2 border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <b className="m-3 text-xl">
                    Orden encontrada - <span className="font-normal">{dataOrden.fullName.toUpperCase()}</span>
                </b>
            </header>

            <main className="flex flex-col md:flex-row w-full">
                <section className="flex flex-col justify-center sm:justify-between mt-6 w-full md:w-1/2 sm:pr-8">
                    <h2 className="text-xl border-b-2 font-bold border-indigo-500 m-3 mb-8">Datos de envío y recepción</h2>

                    <div className="flex flex-col md:flex-row w-full sm:w-auto">
                        <h2 className="text-xl font-bold m-3 w-max">Número de Orden</h2>
                        <span className="text-lg m-3 hidden md:flex">:</span>
                        <b className="border-none m-3 text-base font-normal">{nroOrden}</b>
                    </div>
                    <div className="flex flex-col md:flex-row mt-0 sm:mt-6 w-full sm:w-auto">
                        <h2 className="text-xl font-bold m-3 w-max">Fecha de creación</h2>
                        <span className="text-lg m-3 hidden md:flex">:</span>
                        <b className="border-none m-3 text-base font-normal">{fecha}</b>
                    </div>

                    <div className="flex flex-col md:flex-row mt-0 sm:mt-6 w-full sm:w-auto">
                        <h2 className="text-xl font-bold m-3 w-max">Dirección de envío</h2>
                        <span className="text-lg m-3 hidden md:flex">:</span>
                        <b className="border-none m-3 text-base font-normal">{direccionDeEnvio}</b>
                    </div>

                    <div className="flex flex-col md:flex-row mt-0 sm:mt-6 w-full sm:w-auto">
                        <h2 className="text-xl font-bold m-3 w-max">Medio de contacto</h2>
                        <span className="text-lg m-3 hidden md:flex">:</span>
                        <b className="border-none m-3 text-base font-normal">{email}</b>
                    </div>
                </section>

                <section className="flex flex-col w-full md:w-1/2 md:pl-8 mt-12 sm:mt-6">
                    <h2 className="text-xl border-b-2 font-bold border-indigo-500 m-3">Productos de la orden</h2>

                    <div className="flex flex-col xs:flex-row md:flex-col w-full">
                        {items.map(({ producto, cantidad }, index) => (
                            <li key={producto.id} className={`p-4 flex flex-col w-full xs:w-1/2 md:w-full md:flex-row ${index !== 0 && 'border-t border-gray-200'}`}>
                                <div className="flex justify-start items-center flex-shrink-0 aspect-w-5 aspect-h-1 w-full md:w-1/5 xs:justify-center mb-5 xs:mb-0">
                                    <img src={producto.img} alt={producto.id} className="w-full md:w-24 h-[172px] xs:h-full object-cover rounded-md" />
                                </div>

                                <div className="sm:ml-5 w-full xs:w-1/2 md:w-full flex flex-col md:flex-row justify-between mt-8 items-center md:mt-0">
                                    <div className="flex flex-col w-full relative">
                                        <div className="flex justify-between space-x-5">
                                            <p className="text-xl md:text-base text-gray-700 font-semibold hover:text-black hover:underline">{`${cantidad} x ${producto.nombre}`}</p>
                                        </div>

                                        <p className="mt-1 text-lg sm:text-sm text-gray-400 capitalize">{producto.estrellas + ' estrellas'}</p>

                                        <p className="mt-1 mb-5 text-lg md:text-sm text-gray-400 capitalize">480gr.</p>
                                    </div>
                                    <div className="flex flex-col items-end md:justify-end w-full">
                                        <span className="text-xl text-gray-700 font-semibold w-full">{`Total: S/ ${(producto.precio * cantidad).toFixed(2)}`}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>

                    <span className="font-bold px-5 text-center text-xl md:text-base sm:px-0 mt-8 sm:mx-6 md:text-right md:mt-0">Total incluyendo impuestos: S/ {(Number(dataOrden.total) + Number(dataOrden.total * 0.18)).toFixed(2)}</span>
                </section>
            </main>
        </>
    );
};

export default Seguimiento;
