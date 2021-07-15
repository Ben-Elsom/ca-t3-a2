import React from 'react';
import styled from 'styled-components';
import {MdDone} from 'react-icons/md';
import { format, addMinutes, addDays} from 'date-fns';

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

const Input = styled.input`
    border: none;

    &:invalid+span:after{
        content: 'Invalid';
        color: red;
    }
`;

const Submit = styled.button`
    background: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;

`;

export default function SelectTime(props) {
    return (
        <Form onSubmit={props.submit}>
            {/* Date time selection, minimum is 15 min from now, maximum is 7 days from now */}
            <Input
                type='datetime-local'
                min={format(addMinutes(new Date(), 15), "yyyy'-'MM'-'dd'T'HH':'mm")}
                max={format(addDays(new Date(), 7), "yyyy'-'MM'-'dd'T21:00'")}
                required
                name="dateTime"
                onChange={props.onChange}
            /><span className='validate' />
            <Submit type='submit'>
                <MdDone />
            </Submit>            
        </Form>
    )
}
