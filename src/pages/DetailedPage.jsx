import React, { useEffect, useState } from 'react'
import './DetailedPage.css'
import { useLocation } from 'react-router';
import { WeaveSpinner } from '../components/Loading';

function DetailedPage() {
    const location = useLocation();
    const id = location.state?.game.id;
    const [game,setGame] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    useEffect(()=>{
        const gameDetail = async() => {
            try{
                const response = await fetch(`https://api.rawg.io/api/games/${id}?key=1df2aae67f0f4e34bb2d6b8d53f5f06b`);
                const data = await response.json();
                setGame(data);
            } catch(err){
                console.log(err);
            } finally{
                setLoading(false);
            }
        }
        gameDetail();
    },[])

    if(loading) return <WeaveSpinner/>

    return (
        <div className='dp-container'>
            <div className="banner-section">
                <div className="top-part">
                    <div className="left-section">
                        <div className="hover-3d">
                            <div className="poster">                            
                                <img src={game?.background_image}
                                alt='image'/>
                            </div>
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                    <div className="right-section">
                        <p className='text-sm text-white/50'>{game?.developers?.[0]?.name}</p>
                        <h1 className='text-4xl font-bold'>{game?.name}</h1>
                        {game?.genres?.map((genre) => (
                        <h3 key={genre.id}>{genre.name}</h3>
                        ))}
                        <h3>{game?.rating}</h3>
                        <h3>{game?.released.split("-").join(" ")}</h3>
                        <p className='py-5'>{game?.description_raw.split(".").slice(0,3).join(".")+"."}</p>
                        <div className="platforms">
                            <span className="platform">{game?.platforms?.[0]?.platform?.name}</span>
                            <span className="platform">{game?.platforms?.[1]?.platform?.name}</span>
                            <span className="platform">{game?.platforms?.[2]?.platform?.name}</span>
                            <span className="platform">{game?.platforms?.[3]?.platform?.name}</span>
                            <span className="platform">{game?.platforms?.[4]?.platform?.name}</span>
                        </div>
                    </div>
                </div>
                <div className='full-desc'>
                    <h2 className='text-3xl'>{game?.name}</h2>
                    <div className='pt-4' dangerouslySetInnerHTML={{__html : game?.description}} />
                </div>
            </div>
            <div className="ss-section">
                <p className='slog'>Moments to touch</p>
                <h1 className='h-title'>Gallery</h1>
                <div className='galary'>
                    
                    <img src={game?.background_image_additional}
                    alt='img1'
                    className="ss"
                    />                    
                </div>
            </div>
            <div className="sys-req">
                <p className='slog'>Can I Run?</p>
                <h1 className='h-title'>System Requirement</h1>
            </div>
        </div>
    )
}

export default DetailedPage;
