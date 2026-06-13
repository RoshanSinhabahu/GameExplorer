import { use, useEffect, useState } from 'react';
import './Hero.css'
import { FaStar } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { WeaveSpinner } from './Loading';

const Hero = ({ popGames }) => {
    const [game,setGame] = useState(null);
    const [desc,setDesc] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const result = await fetch(`https://api.rawg.io/api/games/${game?.id}?key=1df2aae67f0f4e34bb2d6b8d53f5f06b`);
                const data = await result.json();
                setDesc(data.description_raw);
            }catch(err){
                console.log(err);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[game])

    useEffect(()=>{
        if(!popGames.length) return;
        let i = 1;

        setGame(popGames[Math.floor(Math.random()*popGames.length)]);

        const interval = setInterval(()=>{
            setGame(popGames[i]);
            i = Math.floor(Math.random()*popGames.length);
            },10000)
            

        return() => clearInterval(interval);
    },[popGames]);

    const handleClick = () => {
        
    }
    if(loading) return <WeaveSpinner/>

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
                <p className='description'>{desc?desc.split(".").slice(0,2).join(".")+".":"Loading description..."}</p>
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