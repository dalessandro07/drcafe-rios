const dataProductos = {
    cafes: [
        {
            id: 'cafe-etiopia',
            nombre: 'Café Etiopía',
            precio: 29.9,
            img: '/assets/images/coffee-1.jpg',
            estrellas: 5,
            descripcion: [
                <p key={1} className="leading-relaxed text-justify">
                    Se trata de un café con mucha personalidad, <b>muy aromático, suave y limpio al paladar</b>. Con un perfil de sabor delicioso, notas frutales y especiadas y una excelente acidez. Espectacular para disfrutar preparándolo con
                    cualquier método. <br /> <em>100% orgánico y de calidad internacional</em>. Sus granos densos y duros aseguran más azúcares y un mejor sabor al tostarlo.
                </p>,
            ],
            stock: 19,
            categoria: 'cafes',
        },
        {
            id: 'cafe-panama',
            nombre: 'Café Panamá',
            precio: 25.9,
            img: '/assets/images/coffee-4.jpg',
            estrellas: 5,
            descripcion: [
                <p key={2} className="leading-relaxed text-justify">
                    El sabor de este café se caracteriza por delicados aromas florales de cítricos, jazmín, orquídea, y sabores frutales de melocotón, pera, durazno, naranja y chocolate, entre otros. <b>tiene un aroma bello, profundo y elegante</b>.
                    Perfecto para los amantes de la naturaleza.
                </p>,
            ],
            stock: 25,
            categoria: 'cafes',
        },
        {
            id: 'cafe-guatemala',
            nombre: 'Café Guatemala',
            precio: 19.9,
            img: '/assets/images/coffee-3.jpg',
            estrellas: 4,
            descripcion: [
                <p key={3} className="leading-relaxed text-justify">
                    A nivel mundial, el café guatemalteco destaca <b>por su calidad y su proceso de producción</b>. Dicha calidad se debe en gran medida a las diferentes altitudes que posee la geografía nacional y la variedad de microclimas con
                    patrones de lluvia beneficiosos para este cultivo.
                </p>,
            ],
            stock: 35,
            categoria: 'cafes',
        },
        {
            id: 'cafe-papuang',
            nombre: 'Café Papúa N.G.',
            precio: 18.9,
            img: '/assets/images/coffee-2.jpg',
            estrellas: 4,
            descripcion: [
                <p key={4} className="leading-relaxed text-justify">
                    En general, el café de PNG, es balanceado en <b>aroma, sabor, acidez y cuerpo</b>. Las tierras donde se cultiva, ricas en cenizas volcánicas y minerales, hacen que los granos sean jugosos, completos y con penetrantes notas
                    herbales. Aseguran a la taza, <b>un café suave y notablemente dulce, de cuerpo y acidez media.</b>
                </p>,
            ],
            stock: 37,
            categoria: 'cafes',
        },
    ],
    chocolates: [
        {
            id: 'chocolate-blanco',
            nombre: 'Chocolate Blanco',
            precio: 25.9,
            img: '/assets/images/chocolate-1.png',
            estrellas: 5,
            descripcion: [
                <p key={1} className="leading-relaxed text-justify">
                    El chocolate blanco es elaborado con manteca de cacao, azúcar y leche. <b>Es cremoso y siempre es dulce</b>, mientras que el chocolate normal es más o menos amargo en función de la proporción de cacao.
                </p>,
            ],
            stock: 12,
            categoria: 'chocolates',
            color: 'bg-red-200/50',
        },
        {
            id: 'chocolate-nueces',
            nombre: 'Chocolate con Nueces',
            precio: 20.5,
            img: '/assets/images/chocolate-2.png',
            estrellas: 5,
            descripcion: [
                <p key={2} className="leading-relaxed text-justify">
                    El snack más rico y <b>saludable</b>. Son nueces bañadas en chocolate negro, <b>un snack muy nutritivo</b> y perfecto para matar el hambre sin sentir remordimientos. El toque perfecto.
                </p>,
            ],
            stock: 21,
            categoria: 'chocolates',
            color: 'bg-blue-200/50',
        },
        {
            id: 'chocolate-mani',
            nombre: 'Chocolate con Maní',
            precio: 15.9,
            img: '/assets/images/chocolate-3.png',
            estrellas: 4,
            descripcion: [
                <p key={3} className="leading-relaxed text-justify">
                    La mejor combinación de chocolate blanco y trocitos de maní, disponible en una presentación ideal para compartir con quién más quieras. <b>Ligero, nutritivo y saludable.</b>
                </p>,
            ],
            stock: 28,
            categoria: 'chocolates',
            color: 'bg-orange-200/50',
        },
        {
            id: 'chocolate-pasas',
            nombre: 'Chocolate con pasas',
            precio: 10.9,
            img: '/assets/images/chocolate-4.png',
            estrellas: 4,
            descripcion: [
                <p key={4} className="leading-relaxed text-justify">
                    Chocolate negro con pasas. Sí, pasas rubias, se trata de una de las frutas deshidratadas más saludables y nutritivas, <b>llena de vitaminas y minerales</b>. Un sabor único.
                </p>,
            ],
            stock: 36,
            categoria: 'chocolates',
            color: 'bg-violet-200/50',
        },
    ],
};

export default dataProductos;
