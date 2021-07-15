import React, {useState, useReducer} from 'react'
import styled from 'styled-components';
import ItemCard from './item/ItemCard.js';
import ShoppingCart from './orderList/ShoppingCart.js';
import OrderListModal from './orderList/OrderListModal.js';


// Data
import itemsList from '../data.js';
import orders from '../data2.js';

const Main = styled.div`
    margin-bottom: 50px;
`;

const MenuContainer = styled.div`
    width: 90vw;
    max-width: 900px;
    display: flex;
    margin: auto;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
`;

const Categories = styled.ul`
    display: flex;
    width: 80%;
    justify-content: space-around;
    box-shadow: 0 1px 10px rgba(154,160,185,1), 0 10px 10px rgba(166,173,201,0.5);
    padding: 10px;
    margin: 0;
    background-color: #fff;
`;

const Category = styled.li`
    list-style: none;
    font-size: 1.3rem;
    
    & a{
        text-decoration: none;
        color: #000;
    }
`;

const CategoryTitle = styled.h1`
    text-align: center;
`;

// const Hr = styled.hr`
//     width: 70vw;
//     height: 3px;
//     background: #000;
// `;

const CategoryContainer = styled.div`
    display: flex;
    width: 95vw;
    max-width: 1100px;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function ItemMenu() {

    ///////////////////////////////////
    const initialState = {
        orderId: 123,
        status: false,
        take_away: true,
        pickup_time: new Date(),
        instruction: '',
        userId: 99999,
        sub_cost: 0.00,
        service_charge: 0.3,
        items: []
    }
    
    const types = {
        TOGGLE_STATUS: 'TOGGLE_STATUS',
        TOGGLE_TAKEAWAY: 'TOGGLE_TAKEAWAY',
        UPDATE_PICKUP_TIME: 'UPDATE_PICKUP_TIME',
        UPDATE_INSTRUCTION: 'UPDATE_INSTRUCTION',
        UPDATE_SUB_COST: 'UPDATE_SUB_COST',
        UPDATE_SERVICE_CHARGE: 'UPDATE_SERVICE_CHARGE',
        ADD_ORDER_ITEM_BY_ID: 'ADD_ORDER_ITEM_BY_ID',
        MINUS_ORDER_ITEM_BY_ID: 'MINUS_ORDER_ITEM_BY_ID'
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case types.TOGGLE_STATUS:
                return state;
            case types.TOGGLE_TAKEAWAY:
                return { ...state, take_away: !state.take_away}
            case types.UPDATE_PICKUP_TIME:
                return state;
            case types.UPDATE_INSTRUCTION:
                return state;
            case types.UPDATE_SUB_COST:
                return state;
            case types.UPDATE_SERVICE_CHARGE:
                return state;
            case types.ADD_ORDER_ITEM_BY_ID:
                return state;
            case types.MINUS_ORDER_ITEM_BY_ID:
                return state;
            default:
                return state;
        }
    }  
    ///////////////////////////////////

    ///////////////////////////////////
    const [something, dispatch] = useReducer(reducer, initialState);
    ///////////////////////////////////

    const categories = ["Main", "Topping", "Side", "Drink"]
    const items = itemsList;
    const orderList = orders;
    const [openOrderList, setOpenOrderList] = useState(false)

    // This render the navbar of the menu
    const renderCategories = categories.map((category) => (
        <Category key={category}><a href={`#${category}`}>{category}</a></Category>
    ))

    // This render all the items within the menu
    const renderItems = categories.map((category) => (
        <div key={category}>
                <CategoryTitle id={category}>{category}</CategoryTitle>
                {/* <Hr /> */}
                <CategoryContainer>
                    {
                        items.filter((item) => item.category === category)
                        .map((item) => (
                            <ItemCard
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                thumbnail={item.thumbnail}
                                addItem={() => dispatch({ type: types.ADD_ORDER_ITEM_BY_ID, value: item.id})}
                            />
                        ))
                    }
                </CategoryContainer>
            </div>
    ))

    return (
        <Main>
            {console.log(something)}
            <MenuContainer>
                <Categories>
                    {renderCategories}
                </Categories>
                <ShoppingCart 
                    openModal={() => setOpenOrderList(true)}
                />
            </MenuContainer>
            {renderItems}
            <OrderListModal
                isOpen={openOrderList}
                closeModal={() => setOpenOrderList(false)}
                orders={orderList}
                updatePickupTime={(pickupTime) => dispatch({type: types.UPDATE_PICKUP_TIME, value: pickupTime})}
                makePayment={() => dispatch({type: types.TOGGLE_TAKEAWAY})}
            />
        </Main>
    )
}


// https://www.kindacode.com/article/react-usereducer-hook-tutorial-and-examples/