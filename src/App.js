import React, {useReducer} from 'react';
import {BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom'
import './App.css';


import Navbar from './components/navbar/Navbar.js';
import HomePage from './pages/HomePage.js'
import ItemMenu from './components/ItemMenu.js';
import ItemForm from './pages/ItemForm.js';
import UserForm from './pages/UserForm.js';
import data1 from './data/data.js';

export const OrderContext = React.createContext();

  const categories = ["Main", "Topping", "Side", "Drink"];
  const itemList = data1;
  const user = {
    email: "example@email.com",
    firstName: "Bob",
    lastName: "Smith",
    membershipPoints: 15
  }  
  ///////////////// useReducer setup //////////////////
  const initialOrder = {
    orderId: 123,
    status: false,
    takeAway: true,
    pickupTime: new Date(),
    instruction: '',
    userId: 99999,
    subCost: 0.00,
    serviceCharge: 0.3,
    orderedItems: []
  }
  
  export const ACTIONS = {
      TOGGLE_STATUS: 'TOGGLE_STATUS',
      TOGGLE_TAKEAWAY: 'TOGGLE_TAKEAWAY',
      ONCHANGE_PICKUP_TIME: 'ONCHANGE_PICKUP_TIME',
      ONCHANGE_INSTRUCTION: 'ONCHANGE_INSTRUCTION',
      UPDATE_SUB_COST: 'UPDATE_SUB_COST',
      ADD_ITEM_BY_1: 'ADD_ITEM_BY_1',
      SUBTRACT_ITEM_BY_1: 'SUBTRACT_ITEM_BY_1',
      ADD_ITEM_TO_ORDER: 'ADD_ITEM_TO_ORDER',
      REMOVE_ITEM_FROM_ORDER: 'REMOVE_ITEM_FROM_ORDER'
  }

  const reducer = (order, action) => {
      switch (action.type) {
          case ACTIONS.TOGGLE_STATUS:
              return order;
          // Currently bound with the make payment button in orderListModal
          case ACTIONS.TOGGLE_TAKEAWAY:
              return { ...order, takeAway: !order.takeAway} 
          case ACTIONS.ONCHANGE_PICKUP_TIME:
              return {...order, pickupTime: action.value};
          case ACTIONS.ONCHANGE_INSTRUCTION:
              return {...order, instruction: action.value};
          case ACTIONS.UPDATE_SUB_COST:
              return order;
          case ACTIONS.ADD_ITEM_BY_1:
              return {...order, orderedItems: action.value}; //NOT YET
          case ACTIONS.SUBTRACT_ITEM_BY_1:
              return {...order, orderItems: action.value}; //NOT YET

          // Would be great to create an orderedItem object later
          case ACTIONS.ADD_ITEM_TO_ORDER:
              return {
                ...order,
                orderedItems: [
                  ...order.orderedItems,
                  {
                    itemId: action.value.id,
                    name: action.value.name,
                    qty: 1,
                    unitPrice: action.value.unitPrice
                  }
                ]
              }
          case ACTIONS.REMOVE_ITEM_FROM_ORDER:
              return console.log(action.value) //NOT YET
              // {
              //   ...order,
              //   orderItems: order.orderedItems.filter((item, index) => index != action.value)
              // }
          default:
              return order;
      }
  }

  ///////////////// end of useReducer setup //////////////////

function App() {
  const [order, dispatch] = useReducer(reducer, initialOrder);

  return (
    <OrderContext.Provider
      value={{ orderState: order, orderDispatch: dispatch}}
    >
      {/* {console.log(order)} */}
      <BrowserRouter className='App'>
        <Navbar user={user}/>
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
          
          {/* Route for editing user */}
          <Route exact path='/user'>
            <UserForm
              edit={true}
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