import React, {useContext} from 'react';
import './OrderListModal.css';
import {OrderContext, ACTIONS} from '../../App.js';

import Modal from 'react-modal';
import PickupTime from './PickupTime.js';
import OrderListItem from './OrderListItem.js';
import PaymentSummary from './PaymentSummary';
import SpecialInstruction from './SpecialInstruction';

export default function OrderListModal(props) {
    const orderContext = useContext(OrderContext)

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            className='orderList-modal'
            ariaHideApp={false}
        >
            <button className='close-btn' onClick={props.closeModal}>x</button>

            <div className="orderList-topSection">
                <h1 className='orderList-header'>Confirm Order</h1>
                <PickupTime />
                <OrderListItem />
            </div>

            <div className="orderList-bottomSection">
                <SpecialInstruction />
                <div className="orderList-sub-bottomSection">
                    <PaymentSummary />
                    <button
                        className='confirm-btn'
                        onClick={() =>
                            orderContext.orderDispatch({
                                type: ACTIONS.TOGGLE_TAKEAWAY  
                            })
                        }
                    >MAKE PAYMENT</button>
                </div>
            </div>
        </Modal>
    )
}
