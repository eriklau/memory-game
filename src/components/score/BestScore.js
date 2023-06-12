import React from 'react'
import styled from 'styled-components'

export default function BestScore( {bestScore} ) {

    return (
        <BestScoreContainer>
            <h3>BEST SCORE: {bestScore} </h3>
        </BestScoreContainer>
    )
}

const BestScoreContainer = styled.div`
    color: red;
`