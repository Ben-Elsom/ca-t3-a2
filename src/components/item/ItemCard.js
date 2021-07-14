import React, {useState} from 'react';
import Button from '../buttons/Button';
import styled from 'styled-components';
import ItemModal from './ItemModal.js';

const ItemCardContainer = styled.div`
    background-color: #fff;
    border: none;
    width: 250px;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 5px 10px rgba(154,160,185,1), 0 15px 40px rgba(166,173,201,0.5);
`;

const ItemThumbnailBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const ItemThumbnail = styled.img`
    width: 150px;
    height: 150px;
    margin: 10px auto;
`;

const ItemName = styled.p`
    margin: 5px;
    font-size: 1.3rem;
    font-weight: bold; 
`;

const ItemPrice = styled.p`
    margin: 5px;
    font-size: 1.2rem;
`;

export default function ItemCard(props) {
    const [itemModal, setItemModal] = useState(false)

    return (
        <ItemCardContainer>
            <ItemModal
                isOpen={itemModal}
                closeModal={() => setItemModal(false)}
                name={props.name}
                price={props.price}
                thumbnail={props.thumbnail}
                description={props.description}
            />
            <ItemThumbnailBtn onClick={() => setItemModal(true)}>
                <ItemThumbnail src={props.thumbnail} alt='item thumbnail'/>
            </ItemThumbnailBtn>
            <ItemName>{props.name}</ItemName>
            <ItemPrice>AUD $ {props.price}</ItemPrice>
            <Button content="ADD +" onClickHandler={() => console.log("clicked")} />
        </ItemCardContainer>
    )
}