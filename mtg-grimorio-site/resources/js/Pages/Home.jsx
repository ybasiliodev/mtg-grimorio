import Card from '../Components/Card';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900">MTG Grimório</h1>
          <p className="text-gray-500">Organize seus decks!</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8 pr-6 pl-6">
        <Card
          title="Sets"
          description="Consulte a lista de sets disponiveis"
          imageUrl="https://images.ctfassets.net/s5n2t79q9icq/4ZL8JBjywgChLRLg1oGVa9/3ac6e27a20abba21d26a27be270fc356/en_articles_archive_news_venturing-outward-new-magic-logo-2018-03-27-meta-image.jpeg"
          buttonText="Buscar"
          redirectRoute="cards-set.index"
        />

        <Card
          title="Cards"
          description="Consulte a lista de cards disponiveis"
          imageUrl="https://media.wizards.com/2018/images/daily/PHVz88xOE7.png"
          buttonText="Buscar"
          redirectRoute="cards-set.index"
        />
      </div>

      <footer className="bg-white py-6 text-center text-sm text-gray-500 fixed bottom-0">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Ygor Silva.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;