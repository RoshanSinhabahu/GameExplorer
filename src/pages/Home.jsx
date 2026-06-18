import React, { useEffect, useState } from 'react'
import CardContainer from '../components/CardContainer'
import Hero from '../components/Hero';
import LoadingComp from '../components/Loading'
import SearchBar from '../components/SearchBar';
import { useQuery } from '@tanstack/react-query';

function Home() {
    const [search,setSearch] = useState('');
    const [input,setInput] = useState('');

    const handleSearch = (e) => {
        setInput(e);
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setSearch(input);
        },500);

        return () => clearTimeout(timer);
    },[input]);
    
    const { data:popGames,isLoading:isPopGamesLoading,error:popError } = useQuery({
        queryKey:["pop-games"],
        queryFn: async() => {
            const res = await fetch('https://api.rawg.io/api/games?key=1df2aae67f0f4e34bb2d6b8d53f5f06b&ordering=-added&page_size=30');
            if(!res.ok){
                throw new Error("Failed to fetch games")
            }
            return res.json();
        }
    });

    const { data:bRevGames,isLoading:isbRevGamesLoading,error:bRevGamesError } = useQuery({
        queryKey:["best-reviewed-games"],
        queryFn: async() => {
            const res = await fetch('https://api.rawg.io/api/games?key=1df2aae67f0f4e34bb2d6b8d53f5f06b&ordering=-metacritic&page_size=30');
            if(!res.ok){
                throw new Error("Failed to fetch games")
            }
            return res.json();
        }
    });

    const { data:rUpGames,isLoading:isrUpGamesLoading,error:rUpGamesError } = useQuery({
        queryKey:["recently-updated-games"],
        queryFn: async() => {
            const res = await fetch('https://api.rawg.io/api/games?key=1df2aae67f0f4e34bb2d6b8d53f5f06b&ordering=-updated&page_size=30');
            if(!res.ok){
                throw new Error("Failed to fetch games")
            }
            return res.json();
        }
    });
    

    const { data:searchData,isLoading:isSearchLoading,error:searchError} = useQuery({
        queryKey: ["search-game",search],
        queryFn: async() => {
            const res = await fetch(`https://api.rawg.io/api/games?key=1df2aae67f0f4e34bb2d6b8d53f5f06b&search=${search}`);
            return res.json();
        },
        enabled: !!search
    })


    if(isPopGamesLoading) return <LoadingComp/>;
    if(isbRevGamesLoading) return <LoadingComp/>;
    if(isrUpGamesLoading) return <LoadingComp/>;
    
    if(popError) return <p>ERROR 404</p>
    if(bRevGamesError) return <p>ERROR 404</p>
    if(rUpGamesError) return <p>ERROR 404</p>
    if(searchError) return <p>ERROR 404</p>
    
    return (
        <div>
            <Hero popGames={popGames.results}/>
            <SearchBar onSearch={handleSearch} value={input}/>
            <CardContainer popGames={searchData?.results || popGames.results} bRevGames={bRevGames.results} rUpGames={rUpGames.results}/>
        </div>
    )
}

export default Home
