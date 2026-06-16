import { use, useEffect, useState } from 'react';
import './Hero.css'
import { FaStar } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import LoadingComp from './Loading';
import { useQuery } from '@tanstack/react-query';

const Hero = ({ popGames }) => {
    const [game,setGame] = useState(null);

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
        
    }

    return(
        <div className="hero-section" id='hero'>
            <img src={game?.background_image}
            alt={game?.name}
            className='hero-img'/>
            <div className="header-details">
                <div>
                    <p className='title-genre'>{(game?.genres?.[0]?.name)}</p>
                    <p className='header-title'>{game?.name}</p>
                    <div className='rating-style'><FaStar className='star-icon'/><p>{game?.rating}</p></div>
                </div>
                <p className='description'>{(data?.description_raw)?(data?.description_raw).split(".").slice(0,2).join(".")+".":"Loading description..."}</p>
                <div className='platforms'>
                <h3 >{game?.genres?.[0]?.name}</h3>
                <h3 >{game?.genres?.[1]?.name}</h3>
                <h3 >{game?.genres?.[2]?.name}</h3>
               </div>
               <button className='button-1' onClick={handleClick} ><AiOutlineExclamationCircle className='icon-btn'/>See More</button>
            </div>
        </div>
    )
}

export default Hero;