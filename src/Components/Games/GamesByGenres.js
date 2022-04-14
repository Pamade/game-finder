import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DisplayResults from '../DisplayResults/DisplayResults'

function GamesByGenres() {
    let {genre} = useParams()    
    const pageNum = useSelector(state => state.games.pageNum)
    return <DisplayResults apiCall={`https://api.rawg.io/api/games?genres=${genre}&page=${pageNum}&key=7597f52c3a1b4d5d82caf6b0437c43eb`} />
}

export default GamesByGenres
