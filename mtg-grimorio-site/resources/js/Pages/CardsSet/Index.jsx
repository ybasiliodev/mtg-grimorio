import Card from '../../Components/Card';

const ItemList = ({ data }) => {

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white py-6 shadow-sm">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-900">MTG Grimório</h1>
                    <p className="text-gray-500">Organize seus decks!</p>
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8 pr-6 pl-6">

                {data.map((item) => {
                    return (
                    <Card
                        title={item.name}
                        description={item.set_type}
                        imageUrl={item.icon_svg_uri}
                        buttonText="Explorar set"
                    />
                    )
                })}

            </div>

            <footer className="bg-white py-6 text-center text-sm text-gray-500 fixed bottom-0">
                <div className="container mx-auto px-4">
                    <p>© {new Date().getFullYear()} Ygor Silva.</p>
                </div>
            </footer>
        </div>
    );
};

export default ItemList;