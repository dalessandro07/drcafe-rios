const dataProductos = {
    cafes: [
        {
            id: 1,
            nombre: 'Café Etiopía',
            precio: 49.9,
            img: '/assets/images/coffee-1.jpg',
            estrellas: 5,
            descripcion: [
                <p key={1} className="leading-relaxed">
                    Se trata de un café con mucha personalidad, <b>muy aromático, suave y limpio al paladar</b>. Con un perfil de sabor delicioso, notas frutales y especiadas y una excelente acidez. Espectacular para disfrutar preparándolo con
                    cualquier método. <br /> <em>100% orgánico y de calidad internacional</em>. Sus granos densos y duros aseguran más azúcares y un mejor sabor al tostarlo.
                </p>,
            ],
            stock: 19,
            categoria: 'cafes',
        },
        {
            id: 2,
            nombre: 'Café Panamá',
            precio: 45.9,
            img: '/assets/images/coffee-4.jpg',
            estrellas: 5,
            descripcion: [
                <p key={2} className="leading-relaxed">
                    El sabor de este café se caracteriza por delicados aromas florales de cítricos, jazmín, orquídea, y sabores frutales de melocotón, pera, durazno, naranja y chocolate, entre otros. <b>tiene un aroma bello, profundo y elegante</b>
                </p>,
            ],
            stock: 35,
            categoria: 'cafes',
        },
        {
            id: 3,
            nombre: 'Café Guatemala',
            precio: 39.9,
            img: '/assets/images/coffee-3.jpg',
            estrellas: 4,
            descripcion: [
                <p key={3} className="leading-relaxed">
                    Se trata de un café con mucha personalidad, <b>muy aromático, suave y limpio al paladar</b>. Con un perfil de sabor delicioso, notas frutales y especiadas y una excelente acidez. Espectacular para disfrutar preparándolo con
                    cualquier método. <br /> <em>100% orgánico y de calidad internacional</em>. Sus granos densos y duros aseguran más azúcares y un mejor sabor al tostarlo.
                </p>,
            ],
            stock: 75,
            categoria: 'cafes',
        },
        {
            id: 4,
            nombre: 'Café Papúa N.G.',
            precio: 29.9,
            img: '/assets/images/coffee-2.jpg',
            estrellas: 3,
            descripcion: [
                <p key={4} className="leading-relaxed">
                    Se trata de un café con mucha personalidad, <b>muy aromático, suave y limpio al paladar</b>. Con un perfil de sabor delicioso, notas frutales y especiadas y una excelente acidez. Espectacular para disfrutar preparándolo con
                    cualquier método. <br /> <em>100% orgánico y de calidad internacional</em>. Sus granos densos y duros aseguran más azúcares y un mejor sabor al tostarlo.
                </p>,
            ],
            stock: 57,
            categoria: 'cafes',
        },
    ],
    chocolates: [
        {
            id: 1,
            nombre: 'Chocolate Blanco',
            precio: 35.9,
            img: '/assets/images/chocolate-1.png',
            estrellas: 5,
            descripcion: [
                <p key={1} className="leading-relaxed">
                    Se trata de un café con mucha personalidad, <b>muy aromático, suave y limpio al paladar</b>. Con un perfil de sabor delicioso, notas frutales y especiadas y una excelente acidez. Espectacular para disfrutar preparándolo con
                    cualquier método. <br /> <em>100% orgánico y de calidad internacional</em>. Sus granos densos y duros aseguran más azúcares y un mejor sabor al tostarlo.
                </p>,
            ],
            stock: 29,
            categoria: 'chocolates',
            color: 'bg-red-200',
        },
        {
            id: 2,
            nombre: 'Chocolate Negro',
            precio: 30.5,
            img: '/assets/images/chocolate-2.png',
            estrellas: 5,
            descripcion: [
                <p key={2} className="leading-relaxed">
                    El sabor de este café se caracteriza por delicados aromas florales de cítricos, jazmín, orquídea, y sabores frutales de melocotón, pera, durazno, naranja y chocolate, entre otros. <b>tiene un aroma bello, profundo y elegante</b>
                </p>,
            ],
            stock: 37,
            categoria: 'chocolates',
            color: 'bg-blue-200',
        },
        {
            id: 3,
            nombre: 'Chocolate con Maní',
            precio: 25.9,
            img: '/assets/images/chocolate-3.png',
            estrellas: 4,
            descripcion: [
                <p key={3} className="leading-relaxed">
                    Se trata de un café con mucha personalidad, <b>muy aromático, suave y limpio al paladar</b>. Con un perfil de sabor delicioso, notas frutales y especiadas y una excelente acidez. Espectacular para disfrutar preparándolo con
                    cualquier método. <br /> <em>100% orgánico y de calidad internacional</em>. Sus granos densos y duros aseguran más azúcares y un mejor sabor al tostarlo.
                </p>,
            ],
            stock: 42,
            categoria: 'chocolates',
            color: 'bg-orange-200',
        },
        {
            id: 4,
            nombre: 'Chocolate con pasas',
            precio: 19.9,
            img: '/assets/images/chocolate-4.png',
            estrellas: 3,
            descripcion: [
                <p key={4} className="leading-relaxed">
                    Se trata de un café con mucha personalidad, <b>muy aromático, suave y limpio al paladar</b>. Con un perfil de sabor delicioso, notas frutales y especiadas y una excelente acidez. Espectacular para disfrutar preparándolo con
                    cualquier método. <br /> <em>100% orgánico y de calidad internacional</em>. Sus granos densos y duros aseguran más azúcares y un mejor sabor al tostarlo.
                </p>,
            ],
            stock: 49,
            categoria: 'chocolates',
            color: 'bg-violet-200',
        },
    ],
};

export default dataProductos;
