import React from 'react'
import './DetailedPage.css'

function DetailedPage() {
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
                        <p className='text-xl'>Ubisoft</p>
                        <h1 className='text-4xl'>The Last Of Us - Part 1</h1>
                        <h3 className='tracking-[10px]'>Action</h3>
                        <h3>Ratings</h3>
                        <h3>2015 08 30</h3>
                        <p className='py-5'>With only the tools in your backpack and a can-do attitude, begin a new life on a mysterious archipelago of islands. As you explore uncharted lands, you are free to choose your path and shape your own journey.Embark on your journey solo or team up with up to 7 friends in seamless online co-op.</p>
                        <div className="platforms">
                            <span className="platform">Windows</span>
                            <span className="platform">MacOS</span>
                            <span className="platform">Android</span>
                            <span className="platform">X Box</span>
                        </div>
                    </div>
                </div>
                <div className='full-desc'>
                    <h2>The Last Of Us - Part 1</h2>
                    <p>With only the tools in your backpack and a can-do attitude, begin a new life on a mysterious archipelago of islands. As you explore uncharted lands, you are free to choose your path and shape your own journey.Embark on your journey solo or team up with up to 7 friends in seamless online co-op.
                        With only the tools in your backpack and a can-do attitude, begin a new life on a mysterious archipelago of islands. As you explore uncharted lands, you are free to choose your path and shape your own journey.Embark on your journey solo or team up with up to 7 friends in seamless online co-op.
                        With only the tools in your backpack and a can-do attitude, begin a new life on a mysterious archipelago of islands. As you explore uncharted lands, you are free to choose your path and shape your own journey.Embark on your journey solo or team up with up to 7 friends in seamless online co-op.
                        With only the tools in your backpack and a can-do attitude, begin a new life on a mysterious archipelago of islands. As you explore uncharted lands, you are free to choose your path and shape your own journey.Embark on your journey solo or team up with up to 7 friends in seamless online co-op.
                    </p>
                </div>
            </div>
            <div className="ss-section">
                <p className='slog'>Moments to touch</p>
                <h1 className='h-title'>Screen Shots</h1>
                <div className='galary'>
                    <img src='https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84'
                    alt='img1'
                    className='ss'/>
                    <img src='https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84'
                    alt='img1'
                    className='ss'
                    />
                    <img src='https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84'
                    alt='img1'
                    className='ss'
                    />
                    <img src='https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84'
                    alt='img1'
                    className='ss'
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
