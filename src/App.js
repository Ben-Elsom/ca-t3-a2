import React from 'react';
import './App.css';
// import OrderPage from './pages/OrderPage.js';
import Navbar from './components/navbar/Navbar.js';
import ItemMenu from './components/ItemMenu.js';

function App() {
  // const [user, setUser] = useState({
  //   email: "example@email.com",
  //   firstName: "Bob",
  //   lastName: "Smith",
  //   membershipPoints: 15
  // })
  const user = {
    email: "example@email.com",
    firstName: "Bob",
    lastName: "Smith",
    membershipPoints: 15
  }


  return (
    <div className="App">
      {/* <OrderPage /> */}
      <Navbar user={user}/>
      <ItemMenu/>
    </div>
  );
}

export default App;
