import React from 'react';
import styled from 'styled-components'
import ItemCard from '../item/ItemCard.js';

const CategoryTitle = styled.h1`
    text-align: center;
`;

const CategoryContainer = styled.div`
    display: flex;
    width: 95vw;
    max-width: 1100px;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function RenderItemCards(props) {

    const categories = props.categories;
    const items = props.items;

    return categories.map((category) => (
        <div key={category}>
            <CategoryTitle id={category}>{category}</CategoryTitle>
            <CategoryContainer>
                {
                    items.filter((item) => item.category === category)
                    .map((item) => (
                        <ItemCard
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            thumbnail={item.thumbnail}
                            addItem={props.addItem}
                        />
                    ))
                }
            </CategoryContainer>
        </div>
    ))
}