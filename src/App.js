import React, {useReducer, useState} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';

// Importing components
import Navbar from './components/navbar/Navbar.js';
import HomePage from './pages/HomePage.js'
import ItemMenu from './components/ItemMenu.js';
import ItemForm from './pages/ItemForm.js';
import UserForm from './pages/UserForm.js';
import LoginForm from './pages/LoginForm.js';

// Importing reducers
import { initialOrder, reducer } from './useReducer/orderReducer.js';
import { User } from './useReducer/userReducer.js';
import { categories, itemList } from './useReducer/menuReducer';

// Exporting orderContext
export const OrderContext = React.createContext();

function App() {
  const [order, dispatch] = useReducer(reducer, initialOrder);
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <OrderContext.Provider
      value={{ orderState: order, orderDispatch: dispatch}}
    >
      {/* {console.log(order)} */}
      <BrowserRouter className='App'>
        <button onClick={() => setLoggedIn(!loggedIn)}>
          {loggedIn ? 'Log out' : 'Log in'}
        </button>
        <Navbar user={User} loggedIn={loggedIn}/>
        <Switch className='main-content'>

          {/* Route for home page */}
          <Route exact path='/'>
            <HomePage />
          </Route>
          
          {/* Route for ordering */}
          <Route exact path='/order'>
            <ItemMenu
              itemList={itemList}
              categories={categories}
            />
          </Route>
          
          {/* Route for login */}
          <Route exact path='/user/login'>
            <LoginForm />
          </Route>

          {/* Route for editing user */}
          <Route exact path='/user/edit'>
            <UserForm
              edit={loggedIn}
            />
          </Route>

          {/* Route for editing user */}
          <Route exact path='/user/create'>
            <UserForm
              edit={loggedIn}
            />
          </Route>

          {/* Route for editing item */}
          <Route path='/item'>
            <ItemForm />
          </Route>
          
          {/* Route for redirection */}
          <Route><Redirect to='/' /></Route>
        </Switch>
      </BrowserRouter>
    </OrderContext.Provider>
  );
}

export default App;


// https://reactrouter.com/web/guides/quick-start
