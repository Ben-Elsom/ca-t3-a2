import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {OrderContext} from '../../App.js';

import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';

const Container = styled.div`
    padding: 10px 20px 5px 20px;
    background: #fff;
`;

const SummaryContainer = styled.div`
    margin-top: 10px;
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ViewDetail = styled.button`
    color: #000;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Hr = styled.hr``;

const P = styled.p`
    font-size: 0.9rem;

    color: rgb(56, 56, 56);
    margin: 0;
`;

const H4 = styled.h4`
    margin: 0 0 15px 0;
`;

export default function PaymentSummary(props) {
    const orderContext = useContext(OrderContext);
    const [openDetail, setOpenDetail] = useState(false)

    return (
        <Container>
            <SubContainer>
                <P>PAYMENT SUMMARY</P>
                <ViewDetail onClick={() => setOpenDetail(!openDetail)}>
                    VIEW DETAIL 
                    {openDetail ? <AiFillCaretDown /> : <AiFillCaretUp />}
                </ViewDetail>
            </SubContainer>
            {openDetail &&
            
            <SummaryContainer>
                <SubContainer>
                    <P>SUBTOTAL</P>
                    <P>AUD $ *missing*</P>
                </SubContainer>
                <SubContainer>
                    <P>SERVICE CHARGE</P>
                    <P>AUD $ {orderContext.orderState.serviceCharge}</P>
                </SubContainer>
                <SubContainer>
                    <P>GST (INCL) 10%</P>
                    <P>AUD $ *missing*</P>
                </SubContainer>
            </SummaryContainer>
            }
            <Hr />
            <SubContainer>
                <H4>TOTAL PAYMENT</H4>
                <H4>AUD $ 30.20</H4>
            </SubContainer>
        </Container>
    )
}
