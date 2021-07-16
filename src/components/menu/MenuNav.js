import React from 'react';
import styled from 'styled-components';
import RenderCategoryNav from './RenderCategoryNav';
import ShoppingCart from '../orderList/ShoppingCart.js';

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

export default function MenuNav(props){
    return(
        <MenuContainer>
                    <Categories>
                        <RenderCategoryNav categories={props.categories} />
                    </Categories>
                    <ShoppingCart 
                        openModal={props.openOrderListModal}
                    />
        </MenuContainer>
    )
}