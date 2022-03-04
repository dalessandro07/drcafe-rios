import Item from './Item';

const ItemList = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {data.map((item) => {
                return <Item key={item.id} producto={item} />;
            })}
        </div>
    );
};

export default ItemList;
