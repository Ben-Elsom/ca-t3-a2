import React from 'react'
import styled from 'styled-components';
import QtyButton from '../buttons/QtyButton.js';

const Container = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 10px 10px;
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
    justify-content: space-between;
    align-items: center;
    width: 45%;
`;


const Price = styled.p`
    margin: 0 0 0 10px;
    wrap: nowrap;
`;

export default function OrderListItem(props) {

    return (
        <Container >
            <ItemName>{props.name}</ItemName>
            <QtyContainer>
                <QtyButton 
                    qty={props.qty}
                    add={props.addHandler}
                    subtract={props.subtractHandler}
                />
                <Price>$ {(props.unitPrice * props.qty).toFixed(2)}</Price>
            </QtyContainer>
        </Container>
    )
}