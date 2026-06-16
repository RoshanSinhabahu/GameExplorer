import React, { useEffect, useState } from 'react'
import CardContainer from '../components/CardContainer'
import Hero from '../components/Hero';
import LoadingComp from '../components/Loading'
import SearchBar from '../components/SearchBar';
import { useQuery } from '@tanstack/react-query';

function Home() {
    
    const { data,isLoading,error } = useQuery({
        queryKey:["pop-games"],
        queryFn: async() => {
            const res = await fetch('https://api.rawg.io/api/games?key=1df2aae67f0f4e34bb2d6b8d53f5f06b&ordering=-added&page_size=30');
            if(!res.ok){
                throw new Error("Failed to fetch games")
            }
            return res.json();
        }
    });

    if(isLoading) return <LoadingComp/>;
    if(error) return <p>error</p>
    return (
        <div>
            <Hero popGames={data.results}/>
            <SearchBar />
            <CardContainer popGames={data.results}/>
        </div>
    )
}

export default Home
