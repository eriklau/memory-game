import React from 'react'
import styled from 'styled-components'

export default function Header() {
    
    return (
        <HeaderContainer>
            <h1>GREEK GODS MEMORY GAME</h1>
            <h4>Don't click on the same god twice! Or else...</h4>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
`