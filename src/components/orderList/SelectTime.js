import React, {useState} from 'react';
import styled from 'styled-components';
import {BiEditAlt} from 'react-icons/bi';

const Container = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 10px 8px;
    position: relative;
`;

const H4 = styled.h4`
    margin: 5px 0 5px 20px;
`;


const P = styled.p`
    margin: 0 0 0 20px;
`;

const Icon = styled.button`
    font-size: 2rem;
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(-50%, -50%);
`;

export default function SelectTime() {
    const [dateTime, setDateTime] = useState(new Date());
    return (
        <Container>
            <H4>PICK UP TIME</H4>
            <P>DATE: {dateTime.toDateString()}</P>
            <P>TIME: {dateTime.toLocaleTimeString()}</P>
            <Icon>
                <BiEditAlt />
            </Icon>
        </Container>
    )
}
