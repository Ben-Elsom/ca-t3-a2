import React, {useState} from 'react'
import styled from 'styled-components';
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

export default function OrderListItem(props) {
    const [qty, setQty] = useState(props.qty);

    return (
        <Container>
            <ItemName>{props.name}</ItemName>
            <QtyContainer>
                <QtyButton 
                    qty={qty}
                    add={() => setQty(qty + 1)}
                    minus={() => {
                        if(qty > 0){
                            setQty(qty - 1)
                        }
                    }}
                />
                <Price>AUD $ {props.unitPrice * qty}</Price>
            </QtyContainer>
        </Container>
    )
}
