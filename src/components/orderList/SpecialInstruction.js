import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0px 20px 10px 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 10px 20px;
    background: #fff;
`;

const P = styled.p`
    margin: 0 0 5px 0;
    font-size: 1rem;
    font-weight: bold;
`;

const TextField = styled.input`
    width: 100%;
    height: 30px;
    font-size: 1rem;
`;

export default function SpecialInstruction(props) {
    return (
        <Container>
            <P>SPECIAL INSTRUCTION :</P>
            <TextField type='text' placeholder="Anything we could do for you?" onChange={props.onChangeInstruction} defaultValue={props.instruction} />
            
        </Container>
    )
}
