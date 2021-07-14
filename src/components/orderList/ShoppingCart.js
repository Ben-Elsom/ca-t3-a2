import React, {useState} from 'react';
import styled from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import OrderListModal from './OrderListModal.js';

const ShoppingCartIcon = styled.button`
    font-size: 2.7rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export default function ShoppingCart(props) {
    const [orderList, setOrderList] = useState(false)

    return (
        <ShoppingCartIcon onClick={() => setOrderList(true)}>
            <AiOutlineShoppingCart />
            {console.log(orderList)}
            <OrderListModal
                isOpen={orderList}
                onRequestClose={() => setOrderList(false)}
            />
        </ShoppingCartIcon>
    )
}
