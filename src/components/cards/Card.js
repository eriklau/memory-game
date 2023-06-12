import React from 'react'
import styled from 'styled-components'

export default function Card( {card, handleClick} ) {
    console.log(card)

    return (
        <CardContainer onClick={handleClick}>
            <img src={card.image} alt={card.name} />
            <h3 className='card-name'>{card.name}</h3>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 200px;
    background-color: rgb(247, 247, 237);
    border-radius: 10px;
    box-shadow: 5px 5px 5px #888888;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.05);
    }
`

// style img and name?