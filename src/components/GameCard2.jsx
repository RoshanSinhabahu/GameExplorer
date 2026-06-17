import React from 'react'
import './GameCard2.css'
import { FaStar } from "react-icons/fa";

function GameCard2({ game }) {
    const {background_image,name,released,rating,genres} = game;
    return (
        <div className='two-game-card-container'>
            <img src={background_image}
            alt={name}
            className='two-thumb'
            />
            <div className='two-card-details'>
                <p className='two-genre'>{(genres?.[0]?.name)}</p>
                <h2 className='two-card-title'>{name}</h2>
                <div className='two-extra-details'>
                    <div>{released?.split("-")[0]}</div> •<FaStar className='two-icon-star'/>{rating}
                </div>
            </div>
        </div>
    )
}

export default GameCard2;
