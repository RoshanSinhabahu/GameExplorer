import React, { useEffect, useState } from 'react'
import CardContainer from '../components/CardContainer'
import Hero from '../components/Hero';
import LoadingComp from '../components/Loading'
import SearchBar from '../components/SearchBar';

function Home() {
    const [popGames,setPopGames] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        try{
            const fetchPopularGames = async() => {
            const response = await fetch('https://api.rawg.io/api/games?key=1df2aae67f0f4e34bb2d6b8d53f5f06b&ordering=-added&page_size=30');
            const data = await response.json();
            setPopGames(data.results);
            }
        fetchPopularGames();

        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    },[])
    
    if(loading) return <LoadingComp/>
    return (
        <div>
            <Hero popGames={popGames}/>
            <SearchBar />
            <CardContainer popGames={popGames}/>
        </div>
    )
}

export default Home
