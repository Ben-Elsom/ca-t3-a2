import React from 'react';
import styled from 'styled-components';

const Category = styled.li`
    list-style: none;
    font-size: 1.3rem;
    
    & a{
        text-decoration: none;
        color: #000;
    }
`;

export default function RenderCategoryNav(props){
    return props.categories.map((category, index) => (
        <Category key={index}><a href={`#${category}`}>{category}</a></Category>
    ))
}