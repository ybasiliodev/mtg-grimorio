const ItemList = ({ data }) => {
    return (
        <div className="flex gap-4">
            {data.map((item) => (
                <div key={item.code} className="text-center">
                    {/* <img className="w-24 h-24 rounded-lg" src={item.name} alt={item.name} /> */}
                    <p className="mt-2 font-medium">{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;