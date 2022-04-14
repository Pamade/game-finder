import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByTitle } from '../features/search/searchSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const handleChange = e => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchByTitle(inputValue))
        navigate(`games/${inputValue}`)
        setInputValue('')   
    }
    
    return ( 
        <form onSubmit={handleSubmit} className="search">
            <input className="search__input" type="text" value={inputValue} onChange={handleChange}/>
            <button className="search__btn">SUBMIT</button>
        </form>
        
     );
}
 
export default Search;
