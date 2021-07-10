import React, {useState} from 'react';
import './App.css';
// import OrderPage from './pages/OrderPage.js';
import Navbar from './components/Navbar.js';

function App() {
  const [user, setUser] = useState({
    email: "example@email.com",
    firstName: "Bob",
    lastName: "Smith",
    membershipPoints: 15
  })
  return (
    <div className="App">
      {/* <OrderPage /> */}
      <Navbar user={user}/>
    </div>
  );
}

export default App;
