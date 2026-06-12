import React, { useEffect, useState } from 'react'
import './DetailedPage.css'
import { useLocation } from 'react-router';

function DetailedPage() {
    const location = useLocation();
    const id = location.state?.game.id;
    const [game,setGame] = useState(null);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    useEffect(()=>{
        const gameDetail = async() => {
            const response = await fetch(`https://api.rawg.io/api/games/${id}?key=1df2aae67f0f4e34bb2d6b8d53f5f06b`);
            const data = await response.json();
            setGame(data);
        }
        gameDetail();
    },[])

    return (
        <div className='dp-container'>
            <div className="banner-section">
                <div className="top-part">
                    <div className="left-section">
                        <div className="poster">
                            <img src='https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84'
                            alt='image'/>
                        </div>
                    </div>
                    <div className="right-section">
                        <p className='text-xl'>{game?.developers?.[0]?.name}</p>
                        <h1 className='text-4xl'>{game?.name}</h1>
                        <h3 className='tracking-[10px]'></h3>
                        <h3>{game?.rating}</h3>
                        <h3>{game?.released.split("-").join(" ")}</h3>
                        <p className='py-5'>{game?.description_raw.split(".").slice(0,3).join(".")+"."}</p>
                        <div className="platforms">
                            <span className="platform">Windows</span>
                            <span className="platform">MacOS</span>
                            <span className="platform">Android</span>
                            <span className="platform">X Box</span>
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
                <h1 className='h-title'>Screen Shots</h1>
                <div className='galary'>
                    <img src={game?.background_image_additional}
                    alt='img1'
                    className='ss'/>
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
