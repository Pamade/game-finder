import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import DisplayResults from '../DisplayResults/DisplayResults'


function GamesByName() {

    let {title} = useParams()
    const search = useSelector(state =>state.search.search)
    const pageNum = useSelector(state => state.games.pageNum)
    const gameName = search === '' ? title : search

    return (
        <div>
            <DisplayResults apiCall={`https://api.rawg.io/api/games?search=${gameName}&page=${pageNum}&search_exact&key=7597f52c3a1b4d5d82caf6b0437c43eb`} />
        </div>
    )
}

export default GamesByName
