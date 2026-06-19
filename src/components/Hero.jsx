import { use, useEffect, useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { easeInOut, easeOut, motion } from 'framer-motion';

import './Hero.css'

import LoadingComp from './Loading';
import DetailedPage from '../pages/DetailedPage';


const Hero = ({ popGames }) => {
    const [game,setGame] = useState(null);
    const navigate = useNavigate();

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
            scale:1
        }
    }

    const { data,isLoading,error } = useQuery({
        queryKey:["game-data",game?.id],
        queryFn: async() => {
            const res = await fetch(`https://api.rawg.io/api/games/${game?.id}?key=1df2aae67f0f4e34bb2d6b8d53f5f06b`);

            if(!res.ok){
                throw new Error("Failed to fetch");
            }

            return res.json();
        },
        enabled: !!game?.id
    })

    useEffect(()=>{
        if(!popGames.length) return;
        let i = 1;

        setGame(popGames[Math.floor(Math.random()*popGames.length)]);

        const interval = setInterval(()=>{
            setGame(popGames[i]);
            i = Math.floor(Math.random()*popGames.length);
            },10000)
            

        return() => clearInterval(interval);
    },[]);

    const handleClick = () => {
        navigate('/details',{state:{ game }});
    }

    if(error){return <p>ERROR 404</p>}

    return(
        <div className="hero-section" id='hero'>
            <motion.img src={game?.background_image}
            alt={game?.name}
            className='hero-img'
            initial={{opacity:0, scale:1.05 }} animate={{opacity:1, scale:1 }} transition={{duration:0.5, ease:easeInOut, delay:0}}
            />
            <div className="header-details">
                <div>
                    <motion.p 
                    variants={motionVarient}
                    initial='hidden'
                    animate='visible' 
                    transition={{duration:0.5, ease:easeInOut, delay:0}} 
                    className='title-genre'>
                        {(game?.genres?.[0]?.name)}
                    </motion.p>
                    <motion.p variants={motionVarient} initial='hidden' animate='visible' transition={{duration:0.5, ease:easeInOut, delay:0.1}} className='header-title'>{game?.name}</motion.p>
                    <motion.div variants={motionVarient} initial='hidden' animate='visible' transition={{duration:0.5, ease:easeInOut, delay:0.2}} className='rating-style'><FaStar className='star-icon'/><p>{game?.rating}</p></motion.div>
                </div>
                <motion.p initial={{opacity:0, y:50, scale:0.95 }} animate={{opacity:1, y:0, scale:1 }} transition={{duration:0.5, ease:easeInOut, delay:0.3}} className='description'>{(data?.description_raw)?(data?.description_raw).split(".").slice(0,2).join(".")+".":"Loading description..."}</motion.p>
                <div className='platforms'>
                <motion.h3 variants={motionVarient} initial='hidden' animate='visible' transition={{duration:0.5, ease:easeInOut, delay:0.4}}  >{game?.genres?.[0]?.name}</motion.h3>
                <motion.h3 variants={motionVarient} initial='hidden' animate='visible' transition={{duration:0.5, ease:easeInOut, delay:0.5}}  >{game?.genres?.[1]?.name}</motion.h3>
                <motion.h3 variants={motionVarient} initial='hidden' animate='visible' transition={{duration:0.5, ease:easeInOut, delay:0.6}}  >{game?.genres?.[2]?.name}</motion.h3>
               </div>
               <motion.button className='button-1' onClick={handleClick} initial={{opacity:0, scale:0.95,originX:0 }} animate={{opacity:1, scale:1 }} transition={{duration:0.5, ease:easeInOut, delay:0.7}}><AiOutlineExclamationCircle className='icon-btn'/>See More</motion.button>
            </div>
        </div>
    )
}

export default Hero;