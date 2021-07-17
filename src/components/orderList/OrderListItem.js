import React, {useState, useContext} from 'react'
import styled from 'styled-components';
import { OrderContext, ACTIONS } from '../../App.js';
import QtyButton from '../buttons/QtyButton.js';

const Container = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 10px 20px;
    margin: 0 20px 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
`;

const ItemName = styled.p`
    margin: 0;
`;

const QtyContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`;


const Price = styled.p`
    margin: 0 0 0 10px;
`;

export default function OrderListItem() {
    const orderContext = useContext(OrderContext);

    return orderContext.orderState.orderedItems.map((item) =>
        <Container key={item.id}>
            <ItemName>{item.name}</ItemName>
            <QtyContainer>
                <QtyButton 
                    qty={item.qty}
                    // add={() => setQty(qty + 1)}
                    // minus={() => setQty(qty - 1)}
                    minimum={0}
                />
                <Price>AUD $ {item.unitPrice * item.qty}</Price>
            </QtyContainer>
        </Container>
    )
}
