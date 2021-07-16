import React, {useState, useReducer} from 'react'
import styled from 'styled-components';
import MenuNav from './menu/MenuNav.js';
import RenderItemCards from './menu/RenderItemCards.js';
import OrderListModal from './orderList/OrderListModal.js';

// Data
import itemsList from '../data.js';

const Main = styled.div`
    margin-bottom: 50px;
`;

export default function ItemMenu() {

    const categories = ["Main", "Topping", "Side", "Drink"]
    const items = itemsList;

    ///////////////// useReducer setup //////////////////
    const initialState = {
        orderId: 123,
        status: false,
        takeAway: true,
        pickupTime: new Date(),
        instruction: '',
        userId: 99999,
        subCost: 0.00,
        serviceCharge: 0.3,
        items: []
    }
    
    const types = {
        TOGGLE_STATUS: 'TOGGLE_STATUS',
        TOGGLE_TAKEAWAY: 'TOGGLE_TAKEAWAY',
        UPDATE_PICKUP_TIME: 'UPDATE_PICKUP_TIME',
        UPDATE_INSTRUCTION: 'UPDATE_INSTRUCTION',
        UPDATE_SUB_COST: 'UPDATE_SUB_COST',
        ADD_ORDER_ITEM_BY_ID: 'ADD_ORDER_ITEM_BY_ID',
        MINUS_ORDER_ITEM_BY_ID: 'MINUS_ORDER_ITEM_BY_ID'
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case types.TOGGLE_STATUS:
                return state;
            case types.TOGGLE_TAKEAWAY:
                // not yet blinded with button
                return { ...state, take_away: !state.take_away} 
            case types.UPDATE_PICKUP_TIME:
                return {...state, pickupTime: action.value};
            case types.UPDATE_INSTRUCTION:
                return {...state, instruction: action.value};
            case types.UPDATE_SUB_COST:
                return state;
            case types.ADD_ORDER_ITEM_BY_ID:
                return ;
            case types.MINUS_ORDER_ITEM_BY_ID:
                return state;
            default:
                return state;
        }
    }

    const [orderState, dispatch] = useReducer(reducer, initialState);
    ///////////////// end of useReducer setup //////////////////

    // Toggle order list modal
    const [openOrderList, setOpenOrderList] = useState(false)

    return (
        <Main>
            <MenuNav 
                categories={categories}
                openOrderListModal={() => setOpenOrderList(true)}
            />
            <RenderItemCards
                categories={categories}
                items={items}
                addItem={() => dispatch({ type: types.ADD_ORDER_ITEM_BY_ID})}
            />
            <OrderListModal
                isOpen={openOrderList}
                closeModal={() => setOpenOrderList(false)}
                orders={orderState.items}
                instruction={orderState.instruction}
                onChangeInstruction={(e) => dispatch({type: types.UPDATE_INSTRUCTION, value: e.target.value})}
                pickupTime={orderState.pickupTime}
                onChangePickupTime={(e) => dispatch({type: types.UPDATE_PICKUP_TIME, value: new Date(e.target.value)})}
                makePayment={() => dispatch({type: types.TOGGLE_TAKEAWAY})}
            />
        </Main>
    )
}