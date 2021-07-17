import React, {useState} from 'react'
import './ItemModal.css';
import Modal from 'react-modal';
import QtyButton from '../buttons/QtyButton.js';
import Button from '../buttons/Button.js';

export default function ItemModal(props) {
    const [qty, setQty] = useState(1)

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            className='item-modal'
            ariaHideApp={false}
        >
            <button className='close-btn' onClick={props.closeModal}>x</button>
            <img className='item-thumbnail' src={props.thumbnail} alt={props.name} />
            <p className='item-name'>{props.name}</p>
            <p className='item-price'>AUD $ {props.unitPrice}</p>
            <p className='item-description'>{props.description}</p>
            <div className="item-btn-container">
                <QtyButton 
                    qty={qty}
                    add={() => setQty(qty + 1)}
                    minus={() => setQty(qty - 1)}
                    minimum={1}
                />
                <button
                    className="item-btn-add"
                    // missing on click
                >
                    ADD +
                </button>

            </div>
        </Modal>
    )
}


// http://reactcommunity.org/react-modal/