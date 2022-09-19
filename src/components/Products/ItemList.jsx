import { Helmet } from 'react-helmet'
import Item from './Item'

const ItemList = ({ categoria, data }) => {
  return (
    <>
      <Helmet>
        <title>
          DrCafe |{' '}
          {`${
            categoria
              ? categoria === 'cafes'
                ? 'Bolsas de Café'
                : 'Barras de Chocolate'
              : 'Cafés y Chocolates'
          }`}
        </title>
      </Helmet>

      <div className="flex flex-wrap justify-center xl:flex-nowrap">
        {data.map((producto) => {
          return <Item key={producto.id} producto={producto} />
        })}
      </div>
    </>
  )
}

export default ItemList
