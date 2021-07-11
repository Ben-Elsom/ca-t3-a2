import React, {useState} from 'react';
import './App.css';
// import OrderPage from './pages/OrderPage.js';
import Navbar from './components/Navbar.js';
import ramenThumbnail from './imgs/ramen_thumbnail.png';
import ItemCard from './components/ItemCard.js';

function App() {
  const [user, setUser] = useState({
    email: "example@email.com",
    firstName: "Bob",
    lastName: "Smith",
    membershipPoints: 15
  })


  const items = [
    {
      id: 1001,
      name: 'Shoyu Ramen',
      price: '15.00',
      thumbnail: ramenThumbnail,
      description: "This is very yummy"
    },
    {
      id: 1002,
      name: 'Miso Ramen',
      price: '15.00',
      thumbnail: ramenThumbnail
    },
    {
      id: 1003,
      name: 'Tonkatsu Ramen',
      price: '15.00',
      thumbnail: ramenThumbnail
    },
  ]

  return (
    <div className="App">
      {/* <OrderPage /> */}
      <Navbar user={user}/>
      <ItemCard
        name={items[0].name}
        price={items[0].price}
        thumbnail={items[0].thumbnail}
        description={items[0].description} />
    </div>
  );
}

export default App;
