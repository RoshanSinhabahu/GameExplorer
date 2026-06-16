import { useState } from 'react';
import './SearchBar.css'
import { useQuery } from '@tanstack/react-query';

const SearchBar = () => {
    const [input,setInput] = useState('');
    console.log(input);

    const { data,isLoading,error} = useQuery({
        queryKey: ["search-game"],
        queryFn: async() => {
            const res = await fetch(`https://api.rawg.io/api/games?key=1df2aae67f0f4e34bb2d6b8d53f5f06b&search=${input}`);
        }
    })
    return(
        <div className='search-container'>
            <input className='input' 
            placeholder='Search Games...'
            onChange={(e)=>{setInput(e.target.value)}}
            value={input}/>
        </div>
    )
}

export default SearchBar;