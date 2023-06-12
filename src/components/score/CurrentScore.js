import React from 'react'
import styled from 'styled-components'

export default function CurrentScore( {currentScore} ) {

    return (
        <CurrentScoreContainer>
            <h3>CURRENT SCORE: {currentScore} </h3>
        </CurrentScoreContainer>
    )
}

const CurrentScoreContainer = styled.div`
    color: green;
`