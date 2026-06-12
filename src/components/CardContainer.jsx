import React from 'react'
import GameCard from './GameCard'
import './CardContainer.css'

function CardContainer({ popGames }) {
    return (
        <div className='card-container' id='brows'>
            {popGames.map((game,index)=>(
                <GameCard key={index} game={game}/>
            ))}
        </div>
    )
}

export default CardContainer
