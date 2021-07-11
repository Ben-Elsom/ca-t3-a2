import React from 'react'
import styled from 'styled-components';

const OverlayBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(33,33,33,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const OverlayContainer = styled.div`
    width: 80vw;
    height: 80vh;
    max-width: 400px;
    max-height: 500px;
    background-color: #fff;
    padding: 20px;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #000;
    background: #fff;
    cursor: pointer;
`;

const ItemThumbnail = styled.img`
    display: block;
    margin: 20px auto;
    width: 80%;
    
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

const ItemDescription = styled.p`
    margin: 5px;
    font-size: 1.2rem;
`;

export default function OverlayItem(props) {
    return (
        <OverlayBackground>
            <OverlayContainer>
                {console.log(props)}
                <CloseButton onClick={props.closeOverlay}>X</CloseButton>
                <ItemThumbnail src={props.thumbnail} alt='item thumbnail' />
                <ItemName>{props.name}</ItemName>
                <ItemPrice>AUD $ {props.price}</ItemPrice>
                <ItemDescription>{props.description}</ItemDescription>
            </OverlayContainer>
        </OverlayBackground>
    )
}
