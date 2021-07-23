import React, {useState} from 'react'
import styled from 'styled-components';
import MenuNav from './menu/MenuNav.js';
import RenderItemCards from './menu/RenderItemCards.js';
import OrderListModal from './orderList/OrderListModal.js';


const Main = styled.div`
    margin-bottom: 50px;
`;

export default function ItemMenu(props) {

    // Toggle order list modal
    const [openOrderList, setOpenOrderList] = useState(false)

    return (
        <Main>
            <MenuNav 
                categories={props.categories}
                openOrderListModal={() => setOpenOrderList(true)}
            />
            <RenderItemCards
                categories={props.categories}
                itemList={props.itemList}
            />
            <OrderListModal
                isOpen={openOrderList}
                closeModal={() => setOpenOrderList(false)}
            />
        </Main>
    )
}