import React from 'react';
import styled from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const ShoppingCartIcon = styled.button`
    font-size: 2.7rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export default function ShoppingCart(props) {

    return (
        <ShoppingCartIcon onClick={props.openModal}>
            <AiOutlineShoppingCart />
        </ShoppingCartIcon>
    )
}
