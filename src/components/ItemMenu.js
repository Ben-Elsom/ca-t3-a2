import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import ItemCard from './ItemCard.js';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Main = styled.div`
    margin-bottom: 50px;
`;

const MenuContainer = styled.div`
    width: 90vw;
    max-width: 900px;
    display: flex;
    margin: auto;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
`;

const Categories = styled.ul`
    display: flex;
    width: 80%;
    justify-content: space-around;
    box-shadow: 0 1px 10px rgba(154,160,185,1), 0 10px 10px rgba(166,173,201,0.5);
    padding: 10px;
    margin: 0;
    background-color: #fff;
`;

const Category = styled.li`
    list-style: none;
    font-size: 1.3rem;
    
    & a{
        text-decoration: none;
        color: #000;
    }
`;

const ShoppingCart = styled.button`
    font-size: 2.7rem;
    background-color: transparent;
    border: none;
`;

const CategoryTitle = styled.h1`
    text-align: center;
`;

const Hr = styled.hr`
    width: 70vw;
    height: 3px;
    background: #000;
`;

const CategoryContainer = styled.div`
    display: flex;
    width: 95vw;
    max-width: 1100px;
    margin: auto;
    flex-wrap: wrap;
    /* border: 2px solid black; */
    justify-content: center;
`;

export default function ItemMenu(props) {
    const [items, setItems] = useState([])
    const categories = ["Main", "Topping", "Side", "Drink"]
    useEffect(() => {
        setItems(props.items)
    }, [])

    const renderCategories = categories.map((category) => (
        <Category><a href={`#${category}`}>{category}</a></Category>
    ))
    const renderItems = categories.map((category) => (
        <div>
                <CategoryTitle id={category}>{category}</CategoryTitle>
                <Hr />
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
                            />
                        ))
                    }
                </CategoryContainer>
            </div>
    ))

    return (
        <Main>
            <MenuContainer>
                <Categories>
                    {renderCategories}
                </Categories>
                <ShoppingCart onClick={() => console.log("Open order list")}>
                    <AiOutlineShoppingCart />
                </ShoppingCart>
            </MenuContainer>
            {renderItems}
        </Main>
    )
}
