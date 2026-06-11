import React from 'react'
import './GameCard.css'
import { FaStar } from "react-icons/fa";

function GameCard({ game }) {
    return (
        <div className='game-card-container'>
            <img src={game.background_image}
            alt={game.name}
            className='thumb'
            />
            <div className='card-details'>
                <p>Action</p>
                <h2>{game.name}</h2>
                <div className='extra-details'>
                    <div>{game.released?.split("-")[0]}</div> • <div className='rating'><FaStar className='icon'/>{game.rating}</div>
                </div>
            </div>
        </div>
    )
}

export default GameCard;
