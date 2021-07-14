import React from 'react'
import './OrderListModal.css';
import Modal from 'react-modal';
import SelectTime from './SelectTime.js';

export default function OrderListModal(props) {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            className='orderList-modal'
            ariaHideApp={false}
        >
            <button className='close-btn' onClick={props.closeModal}>x</button>
            <h1 className='orderList-header'>Confirm Order</h1>
            <SelectTime />
            
        </Modal>
    )
}
