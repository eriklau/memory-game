import React from 'react'
import Card from './Card'
import styled from 'styled-components'


export default function CardLayout( {cards, handleClick} ) {

    const createCards = cards.map((card) => (
        <Card card={card} handleClick={handleClick}/>
    ))

    return (
        <CardLayoutContainer>
            {createCards}
        </CardLayoutContainer>
    )
}

const CardLayoutContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 4rem;
    background-color: rgb(220, 232, 224);
    height: 70%;
`