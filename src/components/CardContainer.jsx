import React, { useState } from 'react'
import GameCard from './GameCard'
import './CardContainer.css'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'

function CardContainer({ popGames }) {

    return (
        <div className="card-section">
            <div className='card-container' id='brows'>
                {popGames.map((game,index)=>(
                    <Link to='/details' state={{game}} key={index}><GameCard game={game}/></Link>
                ))}
            </div>
        </div>
    )
}

export default CardContainer