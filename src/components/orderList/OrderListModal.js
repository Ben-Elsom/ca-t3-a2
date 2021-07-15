import React from 'react'
import './OrderListModal.css';
import Modal from 'react-modal';
import PickupTime from './PickupTime.js';
import OrderListItem from './OrderListItem.js';
import PaymentSummary from './PaymentSummary';
import SpecialInstruction from './SpecialInstruction';

export default function OrderListModal(props) {

    const renderItems = props.orders.map((item) =>
        <OrderListItem
            key={item.name}
            name={item.name}
            unitPrice={item.unitPrice}
            qty={item.qty}
        />
    )

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
                <PickupTime onSubmit={props.updatePickupTime}/>
                {renderItems}  
            </div>

            <div className="orderList-bottomSection">
                <SpecialInstruction />
                <div className="orderList-sub-bottomSection">
                    <PaymentSummary />
                    <button
                        className='confirm-btn'
                        onClick={props.makePayment}
                    >MAKE PAYMENT</button>
                </div>
            </div>
        </Modal>
    )
}
