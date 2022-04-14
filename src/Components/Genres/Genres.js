import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getGenres } from '../features/games/gamesSlice'

function Genres() {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.games.genres)

    useEffect(() => {
        fetch('https://api.rawg.io/api/genres?key=7597f52c3a1b4d5d82caf6b0437c43eb')
        .then(res => res.json())
        .then(data => {
            dispatch(getGenres(data.results.map(game => game.slug)))
        })
    }, [dispatch])
    
    const displayGenres = genres.map(genre => <NavLink key={genre} className='genres__genre' to={`genres/${genre}`}><span>{genre}</span></NavLink>)

    return (
      <div className="genres">
        {displayGenres}
      </div>
    )
    
}

export default Genres