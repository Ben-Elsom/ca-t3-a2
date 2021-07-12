import React from 'react'
import './ItemModal.css';
import Modal from 'react-modal';

export default function ItemModal(props) {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            className='item-modal'
        >
            <button className='close-btn' onClick={props.closeModal}>x</button>
            <img className='item-thumbnail' src={props.thumbnail} alt={props.name} />
            <p className='item-name'>{props.name}</p>
            <p className='item-price'>AUD $ {props.price}</p>
            <p className='item-description'>{props.description}</p>
            *Insert add button*
        </Modal>
    )
}


// http://reactcommunity.org/react-modal/