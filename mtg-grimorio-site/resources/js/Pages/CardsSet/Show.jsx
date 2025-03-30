const ItemDetail = ({ item }) => {
    return (
        <div className="flex gap-4">
            <div key={item.code} className="text-center">
                <p className="mt-2 font-medium">{item.name}</p>
            </div>
        </div>
    );
};

export default ItemDetail;