import React from 'react'
import './GameCard.css'
import { FaStar } from "react-icons/fa";

function GameCard({ game }) {
    const {background_image,name,released,rating,genres} = game;
    return (
        <div className='game-card-container'>
            <img src={background_image}
            alt={name}
            className='thumb'
            />
            <div className='card-details'>
                <p className='genre'>{(genres?.[1]?.name)?(genres?.[1]?.name):'Action'}</p>
                <h2 className='card-title'>{name}</h2>
                <div className='extra-details'>
                    <div>{released?.split("-")[0]}</div> • <div className='rating'><FaStar className='icon'/>{rating}</div>
                </div>
            </div>
        </div>
    )
}

export default GameCard;
