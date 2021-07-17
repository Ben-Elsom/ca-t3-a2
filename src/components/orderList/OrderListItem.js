import React, {useContext} from 'react'
import styled from 'styled-components';
import QtyButton from '../buttons/QtyButton.js';

import {OrderContext, ACTIONS} from '../../App.js';

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
    const orderContext = useContext(OrderContext);

    return (
        <Container >
            <ItemName>{props.name}</ItemName>
            <QtyContainer>
                <QtyButton 
                    qty={props.qty}
                    add={() => console.log("add by 1")}
                    subtract={() => console.log("subtract by 1")}
                    // subtract={() => orderContext.orderDispatch({
                    //     type: ACTIONS.REMOVE_ITEM_FROM_ORDER,
                    //     value: props.index
                    // })}
                    minimum={-1}
                />
                <Price>AUD $ {props.unitPrice * props.qty}</Price>
            </QtyContainer>
        </Container>
    )
}

    // return orderContext.orderState.orderedItems.map((item) =>
    //     // console.log(item.name)
    //     <Container key={item.itemId}>
    //         {/* <ItemName>{item.name}</ItemName> */}
    //         <QtyContainer>
    //             <QtyButton 
    //                 qty={item.qty}
    //                 add={
    //                     orderContext.orderDispatch({
    //                         type: ACTIONS.ADD_ITEM_BY_1,
    //                         value: addItem(item.id)
    //                     })
    //                 }
    //                 // subtract={() => setQty(qty - 1)}
    //                 minimum={0}
    //             />
    //             <Price>AUD $ {item.unitPrice * item.qty}</Price>
    //         </QtyContainer>
    //     </Container>
    // )
