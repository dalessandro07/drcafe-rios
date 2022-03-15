import ItemCount from './ItemCount';

const ItemDetail = ({ producto, urlID }) => {
    const detalleProd = producto.find((item) => item.id === urlID);

    let stairs = [];

    for (let i = 0; i < detalleProd.estrellas; i++) {
        stairs.push(
            <svg key={i} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        );
    }

    return (
        <section className="text-gray-700 mb-20 body-font overflow-hidden">
            <div className="container px-5 pt-20 mx-auto">
                <div className="lg:justify-around lg:items-center mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="max-w-[600px] max-h-[300px] object-cover object-center rounded border border-gray-200" src={detalleProd.img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">DR CAFE</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detalleProd.nombre}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center my-2">{stairs}</span>
                        </div>
                        {detalleProd.descripcion}
                        <div className="flex mt-6 flex-col pb-5 border-b-2 border-gray-200 mb-5">
                            <div className="flex items-center">
                                <span className="mr-3">Tamaño</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                        <option>340gr</option>
                                        <option>680gr</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="flex mt-8">
                                <ItemCount stock={detalleProd.stock} initial={1} />
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">S/{detalleProd.precio}</span>
                            <button className="flex rounded-lg ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:opacity-80">Comprar ahora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;
