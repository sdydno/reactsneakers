import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';


const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15999,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 17999,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Мужские Кроссовки Puma X Aka Boke Future Rider",
    price: 19999,
    imageUrl: "/img/sneakers/4.jpg",
  },
];



function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="sneakers">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

