import React from 'react';
import styled from 'styled-components';
import { TextInput, TextAreaInput, NumberInput, CheckBoxInput, FormBtn, SelectInput, FileUpload } from '../components/formComponents.js';

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



export default function ItemForm(props) {
    return (
        <Main>
            <Header>{props.editing ? 'Edit Item' : 'Crete Item'}</Header>
            <Form>
                <CheckBoxInput
                    name='published'
                    labelLeft='Hidden'
                    labelRight='Publish'
                    value={props.item.published}
                />

                <TextInput
                    label='Item Name :'
                    name='itemName'
                    onChange={() => console.log('itemName')}
                    value={props.item.itemName}
                    placeholder='Please insert item name'
                />

                <NumberInput
                    label='Unit Price :'
                    name='unitPrice'
                    onChange={() => console.log('unitPrice')}
                    value={props.item.unitPrice}
                    placeholder='Please insert unit price'
                    step={0.05}
                />
                
                <SelectInput
                    label='Category :'
                    name='category'
                    onChange={() => console.log('category')}
                    // This need to be updated later  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
                    value={props.item.description}
                />

                <FileUpload
                    label="Upload thumbnail :"
                    value={props.item.value}
                />

                <br />
                
                <FormBtn value='Submit'/>

            </Form>
        </Main>
    )
}