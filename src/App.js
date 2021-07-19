import React, {useReducer, useState} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';


import Navbar from './components/navbar/Navbar.js';
import HomePage from './pages/HomePage.js'
import ItemMenu from './components/ItemMenu.js';
import ItemForm from './pages/ItemForm.js';
import UserForm from './pages/UserForm.js';
import LoginForm from './pages/LoginForm.js';
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
    orderItems: []
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
      REMOVE_ITEM_FROM_ORDER: 'REMOVE_ITEM_FROM_ORDER',
      ADD: 'ADD',
      SUBTRACT: 'SUBTRACT'
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
              let newList = order.orderItems.slice()
              newList[action.value].qty ++
              return {...order, orderItems: newList}

          case ACTIONS.SUBTRACT_ITEM_BY_1:
            let newOrderedItems2 = order.orderItems.slice()
            newOrderedItems2[action.value].qty = newOrderedItems2[action.value].qty - 1
            return {...order, orderItems: newOrderedItems2}

          // Would be great to create an orderedItem object later
          case ACTIONS.ADD_ITEM_TO_ORDER:
              return {
                ...order,
                orderItems: [
                  ...order.orderItems,
                  {
                    itemId: action.value.id,
                    name: action.value.name,
                    qty: 1,
                    unitPrice: action.value.unitPrice
                  }
                ]
              }
          case ACTIONS.REMOVE_ITEM_FROM_ORDER:
              return {
                ...order,
                orderItems: order.orderItems.filter((item, index) => index !== action.value)
              }

          case ACTIONS.ADD:
              let index = order.orderItems.findIndex(item => item.itemId === action.value)
              if (index === -1){
                let item = itemList.find( o => o.id === action.value)
                return {
                  ...order,
                  orderItems: [
                    ...order.orderItems,
                    {
                      itemId: item.id,
                      name: item.name,
                      qty: 1,
                      unitPrice: item.unitPrice
                    }
                  ]
                }
              } else{
                let newList1 = order.orderItems.slice()
                newList1[index].qty ++
                return {...order, orderItems: newList1}
              }

          case ACTIONS.SUBTRACT:
              // let itemIndex = order.orderItem.findIndex(item => item.itemId === action.value)
              console.log(action.value)
              if (order.orderItem[action.value].qty <= 1){
                return {
                  ...order,
                  orderItems: order.orderItems.filter((item, index) => index !== action.value)
                }
              } else {
                let newList = order.orderItems.slice()
                newList[action.value].qty --
                return {...order, orderItems: newList}
              }
          default:
              return order;
      }
  }

  ///////////////// end of useReducer setup //////////////////

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
        <Navbar user={user} loggedIn={loggedIn}/>
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
