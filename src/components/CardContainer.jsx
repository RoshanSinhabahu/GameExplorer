import React, { useEffect, useRef, useState } from 'react'
import GameCard from './GameCard'
import GameCard2 from './GameCard2'
import './CardContainer.css'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { easeInOut, easeOut, motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'

function CardContainer({ header,popGames,bRevGames,rUpGames }) {

    const popGamesRef = useRef(null);
    const rUpRef = useRef(null);
    const bRevRef = useRef(null);

    const motionVarient = {
        hidden :{
            opacity:0,
            y:50,
            scale:0.95,
            originX:0
        },
        visible: {
            opacity:1,
            y:0,
            scale:1,
            originX:0
        }
    }

    return (
        <div className="card-section">
            {/*Most Popular games*/}
            <motion.div variants={motionVarient} initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.3 }} transition={{ duration:0.5,ease:easeInOut,delay:0 }} className='flex flex-row text-white text-[1.5rem] font-semibold mt-10 pb-3'><div className='w-[4px] bg-red-500 mt-[8px] mb-[8px] mr-3'></div>{header}</motion.div>
            <motion.div variants={motionVarient} initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.3 }} transition={{ duration:0.5,ease:easeInOut,delay:0.1 }} className="trated-carousel"> 
                <button className='leftBtn' onClick={()=>{popGamesRef.current.scrollLeft -= 600}}><IoIosArrowBack /></button>
                <div className='card-container' id='brows' ref={popGamesRef}>
                    {popGames.map((game,index)=>(
                        <Link to='/details' state={{game}} key={index} className='card'><GameCard game={game}/></Link>
                    ))}
                </div>
                <button className='rightBtn' onClick={()=>{popGamesRef.current.scrollLeft += 600}}><IoIosArrowForward /></button>
            </motion.div>

            {/*Recently Updated games*/}
            <motion.div variants={motionVarient} initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.3 }} transition={{ duration:0.5,ease:easeInOut,delay:0 }}  className='flex flex-row text-white text-[1.5rem] font-semibold pb-3 mt-16'><div className='w-[4px] bg-red-500 mt-[8px] mb-[8px] mr-3'></div>Recently Updated</motion.div>
            <motion.div variants={motionVarient} initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.3 }} transition={{ duration:0.5,ease:easeInOut,delay:0.1 }}  className="trated-carousel"> 
                <button className='leftBtn' onClick={()=>{rUpRef.current.scrollLeft -= 600}}><IoIosArrowBack /></button>
                <div className='card-container' id='brows' ref={rUpRef}>
                    {rUpGames.map((game,index)=>(
                        <Link to='/details' state={{game}} key={index} className='card-ver'><GameCard2 game={game}/></Link>
                    ))}
                </div>
                <button className='rightBtn' onClick={()=>{rUpRef.current.scrollLeft += 600}}><IoIosArrowForward /></button>
            </motion.div>

            {/*Best Reviewd games*/}
            <motion.div variants={motionVarient} initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.3 }} transition={{ duration:0.5,ease:easeInOut,delay:0 }}  className='flex flex-row text-white text-[1.5rem] font-semibold pb-3 mt-16'><div className='w-[4px] bg-red-500 mt-[8px] mb-[8px] mr-3'></div>Top Reviewed</motion.div>
            <motion.div variants={motionVarient} initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.3 }} transition={{ duration:0.5,ease:easeInOut,delay:0.1 }} className="trated-carousel"> 
                <button className='leftBtn' onClick={()=>{bRevRef.current.scrollLeft -= 600}}><IoIosArrowBack /></button>
                <div className='card-container' id='brows' ref={bRevRef}>
                    {bRevGames.map((game,index)=>(
                        <Link to='/details' state={{game}} key={index} className='card'><GameCard2 game={game}/></Link>
                    ))}
                </div>
                <button className='rightBtn' onClick={()=>{bRevRef.current.scrollLeft += 600}}><IoIosArrowForward /></button>
            </motion.div>
        </div>
    )
}

export default CardContainer