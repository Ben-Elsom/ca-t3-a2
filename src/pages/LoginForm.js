import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput } from '../components/formComponents';
const Main = styled.main`
    width: 100vw;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const Header = styled.h2`
    text-align: center;
`

const Form = styled.form`
    width: 100%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const Hr = styled.hr`
    width: 90%;
    max-width: 300px;
`;

const P = styled.p`
    text-align: center;
    margin: 0;
`;

export default function LoginForm() {
    return (
        <Main>
            <Header>Welcome back !</Header>
            <Form>
                <EmailInput
                    name='email'
                    label='Email :'
                    placeholder='Please enter your email'
                    onChange={() => console.log('email')}
                />
                <PasswordInput
                    name='password'
                    label='Password :'
                    placeholder='Please enter your password'
                />
            </Form>
            <Hr />
            <P>Don't have an account?</P>
            <P><Link to='/user/create'>Join us here!</Link></P>
        </Main>
    )
}
