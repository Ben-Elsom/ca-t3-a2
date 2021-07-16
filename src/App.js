import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import ItemMenu from './components/ItemMenu.js';

function App() {
  const user = {
    email: "example@email.com",
    firstName: "Bob",
    lastName: "Smith",
    membershipPoints: 15
  }


  return (
    <div className="App">
      <Navbar user={user}/>
      <ItemMenu/>
    </div>
  );
}

export default App;
