import React from 'react';
import styled from 'styled-components';
import { TextInput, TextAreaInput, NumberInput, CheckBoxInput, FormBtn, SelectInput } from '../components/formComponents.js';

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


export default function ItemForm() {
    return (
        <Main>
            <Header>Edit Item</Header>
            <Form>
                <CheckBoxInput
                    name='publish'
                    labelLeft='Hidden'
                    labelRight='Publish'
                />

                <TextInput
                    label='Item Name :'
                    name='itemName'
                    onChange={() => console.log('itemName')}
                    defaultValue=''
                    placeholder='Please insert item name'
                />

                <NumberInput
                    label='Unit Price :'
                    name='unitPrice'
                    onChange={() => console.log('unitPrice')}
                    defaultValue=''
                    placeholder='Please insert 2 decimal points'
                />
                
                <SelectInput
                    label='Category :'
                    name='category'
                    onChange={() => console.log('category')}
                    options={[
                        {
                            label: 'Main',
                            value: 'Main'
                        },
                        {
                            label: 'Side',
                            value: 'Side'
                        },
                        {
                            label: 'Topping',
                            value: 'Topping'
                        },
                        {
                            label: 'Drink',
                            value: 'Drink'
                        }
                    ]}
                />

                <TextAreaInput
                    name='description'
                    label='Description :'
                    placeholder='Description of the item...'
                />
                <br />
                <FormBtn
                    value='Submit'

                />

            </Form>
        </Main>
    )
}