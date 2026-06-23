import { useState } from 'react';
import './SearchBar.css'
import { useQuery } from '@tanstack/react-query';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ onSearch,value,onFocusScroll }) => {
    const [active,setActive] = useState(false);

    const handleToggle = () => {
        setActive(prev => !prev);
    }

    return(
        <div className={`search-container ${active ? 'active' : ''}`}>
            <button className='search-icon' onClick={handleToggle} onFocus={onFocusScroll}><IoSearch /></button>
            <input className='search-input'
            placeholder='Search Games...'
            onChange={(e)=>{onSearch(e.target.value)}}
            value={value}
            />
        </div>
    )
}

export default SearchBar;