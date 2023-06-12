import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Scoreboard from './score/Scoreboard'
import CardLayout from './cards/CardLayout'
import GreekMyth, { allCollection } from 'greek-mythology-data';
import Lightning from './lightning';

export default function Main() {
    const all = new GreekMyth(allCollection);
    const filteredArray = all.list.filter(item => item.images.regular !== '');
    const cardAmount = 16
    const [cards, setCards] = useState([])
    const [currentScore, setCurrentScore] = useState(0) 
    const [bestScore, setBestScore] = useState(0) 
    const [clickedCards, setClickedCards] = useState([])

    const [isLightningVisible, setIsLightningVisible] = useState(false);

    useEffect(() => {
        const loadCards = () => {
          setCards(shuffleArray(getCards(cardAmount)))
        }
        loadCards()
    }, [])

    const getRandomNumbers = () => {
        const numSet = new Set();

        while (numSet.size < cardAmount) {
            numSet.add(Math.floor(Math.random() * filteredArray.length))
        }
        return numSet
    }

    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5)
    }

    const getCards = () => {
        const numSet = getRandomNumbers()
        const cards = []

        numSet.forEach(num => {
                let name = filteredArray[num].name
                let image = filteredArray[num].images.regular
                cards.push({ name, image })
            }
        )
        return cards
    }

    const handleClick = (e) => {
        const cardName = e.target.parentNode.lastChild.textContent
        play(cardName)
        setCards(shuffleArray(cards))
    }

    const play = (cardName) => {
        if (clickedCards.includes(cardName)) {
            reset()
        } 
        else {
            const newScore = currentScore + 1
            if (newScore > bestScore) {
                setBestScore(newScore)
            }
            setCurrentScore(newScore)
            setClickedCards((prevState) => [...prevState, cardName])
        }
    }

    const reset = () => {
        setClickedCards([])
        setCurrentScore(0)
        setIsLightningVisible(true);
        setTimeout(() => {
            setIsLightningVisible(false);
        }, 2000);
    }

    return (
        <MainContainer>
            <Scoreboard 
                currentScore={currentScore}
                bestScore={bestScore}
            />
            <CardLayout 
                cards={cards}
                handleClick={handleClick}
            />
        </MainContainer>
    )
}

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(220, 232, 224);
    color: black;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 100px;
`