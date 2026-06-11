import React from 'react'
import GameCard from './GameCard'
import './CardContainer.css'

function CardContainer() {
    return (
        <div className='card-container'>
            <GameCard />
            <GameCard />
            <GameCard />
        </div>
    )
}

export default CardContainer
