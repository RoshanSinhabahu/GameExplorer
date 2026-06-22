import { useState } from 'react';
import './SearchBar.css'
import { useQuery } from '@tanstack/react-query';

const SearchBar = ({ onSearch,value,onFocusScroll }) => {

    return(
        <div className='search-container'>
            <input className='input' 
            placeholder='Search Games...'
            onChange={(e)=>{onSearch(e.target.value)}}
            value={value}
            onFocus={onFocusScroll}/>
        </div>
    )
}

export default SearchBar;