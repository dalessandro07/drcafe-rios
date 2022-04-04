import Item from './Item';

const ItemList = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-center xl:flex-nowrap">
            {data.map((producto) => {
                return <Item key={producto.id} producto={producto} />;
            })}
        </div>
    );
};

export default ItemList;
