import { useState } from 'react';
import './SearchBar.css'
import { useQuery } from '@tanstack/react-query';

const SearchBar = ({ onSearch,value }) => {

    return(
        <div className='search-container'>
            <input className='input' 
            placeholder='Search Games...'
            onChange={(e)=>{onSearch(e.target.value)}}
            value={value}/>
        </div>
    )
}

export default SearchBar;