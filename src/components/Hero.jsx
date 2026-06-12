import { use, useEffect, useState } from 'react';
import './Hero.css'
import { FaStar } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Hero = ({ popGames }) => {
    const [game,setGame] = useState(null);
    const [desc,setDesc] = useState(null);

    useEffect(()=>{
        const fetchData = async() =>{
            const result = await fetch(`https://api.rawg.io/api/games/${game?.id}?key=1df2aae67f0f4e34bb2d6b8d53f5f06b`);
            const data = await result.json();
            setDesc(data.description_raw);
        }
        fetchData();
    },[game])

    useEffect(()=>{
        if(!popGames.length) return;
        let i = 1;

        setGame(popGames[0]);

        const interval = setInterval(()=>{
            setGame(popGames[i]);
            i = Math.floor(Math.random()*popGames.length);
            },10000)
            

        return() => clearInterval(interval);
    },[popGames]);

    const handleClick = () => {
        
    }

    return(
        <div className="hero-section" id='hero'>
            <img src={game?.background_image}
            alt={game?.name}
            className='hero-img'/>
            <div className="header-details">
                <div>
                    <p className='title-genre'>{(game?.genres?.[1]?.name)?(game?.genres?.[1]?.name):'Action'}</p>
                    <p className='header-title'>{game?.name}</p>
                    <p className='rating'><FaStar className='icon'/>{game?.rating}</p>
                </div>
                <p className='description'>{desc?desc.split(".").slice(0,3).join(".")+".":"Loading description..."}</p>
                <div className='platforms'>
                    <h1>{game?.platforms?.[0]?.platform?.name}</h1>
                    <h1>{game?.platforms?.[1]?.platform?.name}</h1>
                    <h1>{game?.platforms?.[2]?.platform?.name}</h1>
                    <h1>{game?.platforms?.[3]?.platform?.name}</h1>
                    <h1>{game?.platforms?.[4]?.platform?.name}</h1>
                    <h1>{game?.platforms?.[5]?.platform?.name}</h1>
                    <h1>{game?.platforms?.[6]?.platform?.name}</h1>
                    <h1>{game?.platforms?.[7]?.platform?.name}</h1>
                    <h1>{game?.platforms?.[8]?.platform?.name}</h1>
                    <h1>{game?.platforms?.[9]?.platform?.name}</h1>
               </div>
               <button className='button-1' onClick={handleClick} ><AiOutlineExclamationCircle className='icon-btn'/>See More</button>
            </div>
        </div>
    )
}

export default Hero;