import React, { useEffect, useState } from 'react'
import CardContainer from '../components/CardContainer'
import Hero from '../components/Hero';

function Home() {
    const [popGames,setPopGames] = useState(null);

    useEffect(()=>{
        const fetchPopularGames = async() => {
            const response = await fetch('https://api.rawg.io/api/games?key=1df2aae67f0f4e34bb2d6b8d53f5f06b&ordering=-added&page_size=30');
            const data = await response.json();
            setPopGames(data.results);
        }
        fetchPopularGames();
    },[])

    return (
        <div>
            <Hero popGames={popGames}/>
            <CardContainer popGames={popGames}/>
        </div>
    )
}

export default Home
