import React from 'react'
import './GameCard.css'
import { FaStar } from "react-icons/fa";

function GameCard() {
    return (
        <div className='game-card-container'>
            <img src='https://m.media-amazon.com/images/I/7181DgMdMhL.jpg'
            alt='GTA VC'
            className='thumb'/>
            <div className='card-details'>
                <p>Action</p>
                <h2>GTA Vice City</h2>
                <div className='extra-details'>
                    <div>2002</div> • <div className='rating'><FaStar className='icon'/>3.4</div>
                </div>
            </div>
        </div>
    )
}

export default GameCard;
