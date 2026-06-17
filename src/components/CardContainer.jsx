import React, { useRef, useState } from 'react'
import GameCard from './GameCard'
import GameCard2 from './GameCard2'
import './CardContainer.css'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function CardContainer({ popGames,bRevGames,rUpGames }) {

    const popGamesRef = useRef(null);
    const rUpRef = useRef(null);
    const bRevRef = useRef(null);

    return (
        <div className="card-section">
            {/*Most Popular games*/}
            <div className='flex flex-row text-white text-[1.5rem] font-semibold mt-10 pb-3'><div className='w-[4px] bg-red-500 mt-[8px] mb-[8px] mr-3'></div>Most Popular</div>
            <div className="trated-carousel"> 
                <button className='leftBtn' onClick={()=>{popGamesRef.current.scrollLeft -= 600}}><IoIosArrowBack /></button>
                <div className='card-container' id='brows' ref={popGamesRef}>
                    {popGames.map((game,index)=>(
                        <Link to='/details' state={{game}} key={index} className='card'><GameCard game={game}/></Link>
                    ))}
                </div>
                <button className='rightBtn' onClick={()=>{popGamesRef.current.scrollLeft += 600}}><IoIosArrowForward /></button>
            </div>

            {/*Recently Updated games*/}
            <div className='flex flex-row text-white text-[1.5rem] font-semibold pb-3 mt-16'><div className='w-[4px] bg-red-500 mt-[8px] mb-[8px] mr-3'></div>Recently Updated</div>
            <div className="trated-carousel"> 
                <button className='leftBtn' onClick={()=>{rUpRef.current.scrollLeft -= 600}}><IoIosArrowBack /></button>
                <div className='card-container' id='brows' ref={rUpRef}>
                    {rUpGames.map((game,index)=>(
                        <Link to='/details' state={{game}} key={index} className='card-ver'><GameCard2 game={game}/></Link>
                    ))}
                </div>
                <button className='rightBtn' onClick={()=>{rUpRef.current.scrollLeft += 600}}><IoIosArrowForward /></button>
            </div>

            {/*Best Reviewd games*/}
            <div className='flex flex-row text-white text-[1.5rem] font-semibold pb-3 mt-16'><div className='w-[4px] bg-red-500 mt-[8px] mb-[8px] mr-3'></div>Top Reviewed</div>
            <div className="trated-carousel"> 
                <button className='leftBtn' onClick={()=>{bRevRef.current.scrollLeft -= 600}}><IoIosArrowBack /></button>
                <div className='card-container' id='brows' ref={bRevRef}>
                    {bRevGames.map((game,index)=>(
                        <Link to='/details' state={{game}} key={index} className='card'><GameCard2 game={game}/></Link>
                    ))}
                </div>
                <button className='rightBtn' onClick={()=>{bRevRef.current.scrollLeft += 600}}><IoIosArrowForward /></button>
            </div>
        </div>
    )
}

export default CardContainer