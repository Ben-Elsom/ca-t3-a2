import React from 'react';
import styled from 'styled-components';
import { TextInput, PasswordInput, EmailInput, FormBtn } from '../components/formComponents.js';

const Main = styled.main`
    width: 100vw;
    max-width: 900px;
    display: flex;
    flex-direction: column;
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


export default function UserForm(props) {
    return (
        <Main>
            <Header>{props.edit ? 'Edit Account Detail' : 'Create Membership Account'}</Header>
            <Form>
                <TextInput
                    label='First Name :'
                    name='firstName'
                    onChange={() => console.log('firtName')}
                    defaultValue=''
                    placeholder='Please insert your first name'
                />

                <TextInput
                    label='Last Name :'
                    name='lastName'
                    onChange={() => console.log('lastName')}
                    defaultValue=''
                    placeholder='Please insert your last name'
                />

                <EmailInput
                    label='Email :'
                    name='email'
                    onChange={() => console.log('email')}
                    placeholder='Please insert your email'
                />

                <PasswordInput
                    label='Password :'
                    name='password'
                    onChange={() => console.log('password :')}
                    placeholder='(minimum length of 6)'
                />

                <PasswordInput
                    label='Confirm password :'
                    name='confirmPassword'
                    onChange={() => console.log('confirmPw')}
                    placeholder='Confirm Password'
                />

                <FormBtn
                    value='Submit'

                />

            </Form>
        </Main>
    )
}