import React, {useState} from 'react';
import styled from 'styled-components';
import {BiEditAlt} from 'react-icons/bi';
import SelectTime from './SelectTime.js';
import {format, isDate, toDate} from 'date-fns';


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
    cursor: pointer;
`;

const onSubmitHandler = (dateTime) =>{
    dateTime.preventDefault();
    console.log(dateTime);
}



export default function PickupTime() {
    const [dateTime, setDateTime] = useState(new Date());
    const [editing, setEditing] = useState(false);
    
    
    const OnChange = (e) => {
        setDateTime(new Date(e.target.value))
    }

return (
        <Container>
            {/* {console.log(today)} */}
            <H4>PICK UP TIME</H4>
            {!editing &&
                <div>
                    <P>DATE: {format(dateTime, "dd'-'MM'-'YYY")}</P>
                    <P>TIME: {format(dateTime, "HH':'mm")}</P>
                    <Icon onClick={() => setEditing(true)}>
                        <BiEditAlt />
                    </Icon>
                </div>
            }
            {editing &&
                <SelectTime 
                    onChange={OnChange}
                    submit={() => setEditing(false)}
                />
            }
            {console.log(dateTime)}
        </Container>
    )
}
