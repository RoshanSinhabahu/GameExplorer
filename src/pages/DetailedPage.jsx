import React, { useEffect, useState } from 'react'
import './DetailedPage.css'
import { useLocation } from 'react-router';
import LoadingComp from '../components/Loading';
import { FaStar } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';

function DetailedPage() {
    const location = useLocation();
    const id = location.state?.game.id;

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const {data:game,isLoading,error} = useQuery({
        queryKey:['gameDetails', id],
        queryFn: async() => {
            const res = await fetch(`https://api.rawg.io/api/games/${id}?key=1df2aae67f0f4e34bb2d6b8d53f5f06b`);
            if(!res.ok){
                throw new Error("Failed to fetch game")
            }
            return res.json();
        },
        enabled: !!id
    })

    const {data:trailer,isLoading:trailerIsLoading,error:trailerError} = useQuery({
        queryKey:['gameTrailer', id],
        queryFn: async() => {
            const res = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=1df2aae67f0f4e34bb2d6b8d53f5f06b`);
            if(!res.ok){
                throw new Error("Failed to fetch game")
            }
            return res.json();
        }
    })

    if(isLoading) return <LoadingComp/>
    if(error) return <p>ERROR</p>

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
                        {/* <h1 className='text-4xl font-bold'>{game?.id}</h1> */}
                        <div className="genres">
                            {game?.genres?.map((genre) => (
                                <h3 key={genre.id}>{genre.name}</h3>
                            ))}
                        </div>
                        <div className='rating-style'><FaStar className='star-icon'/><p>{game?.rating}</p></div>
                        <h3>{game?.released?.split("-").join(" ")}</h3>
                        <p className='py-5'>{game?.description_raw?.split(".").slice(0,3).join(".")+"."}</p>
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
                    <h2 className='text-3xl sm:text-start text-center'>{game?.name}</h2>
                    <div className='pt-4 sm:text-small' dangerouslySetInnerHTML={{__html : game?.description}} />
                </div>
            </div>
            {trailer?.count > 0 &&
                (<div className="video-player">
                <div className="">
                    <p className='slog'>Moments In Motion</p>
                    <h1 className='h-title'>Official Trailer</h1>
                </div>
                <video controls>
                    <source 
                        src={trailer?.results?.[0]?.data?.max}
                        type="video/mp4"
                    />
                </video>
            </div>)}
            <div className="ss-section">
                <p className='slog'>Captured Adventures</p>
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
                <p>{game?.platforms?.find(item => item.platform.name==='PC')?.requirements?.recommended}</p>
            </div>
        </div>
    )
}

export default DetailedPage;
