import { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {
    const [input,setInput] = useState('');

    return(
        <div className='search-container'>
            <input className='input-field' 
            placeholder='Search Games...'
            onChange={(e)=>{setInput(e.target.value)}}
            value={input}/>
        </div>
    )
}

export default SearchBar;