import React from 'react'
import styled from 'styled-components'
import CurrentScore from './CurrentScore'
import BestScore from './BestScore'

export default function Scoreboard( {currentScore, bestScore } ) {

    return (
        <ScoreboardContainer>
            <CurrentScore currentScore={currentScore} />
            <BestScore bestScore={bestScore}/>
        </ScoreboardContainer>
    )
}

const ScoreboardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    height: 50px;
    margin-bottom: 50px;
    border-radius: 50px;
    background-color: rgb(222, 216, 204);
    padding: 20px 50px;
    box-shadow: 5px 5px 5px #888888;
`