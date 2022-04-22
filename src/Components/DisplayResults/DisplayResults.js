import React, { useLayoutEffect, useState,useCallback } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import GamesDisplay from '../GameDetails/GameDetails'
import { setPageNum, changeGameInformations} from '../features/games/gamesSlice'
import Spinner from '../Spinner/Spinner'
import PageButtons from '../PageButtons/PageButtons'
import { useLocation, useNavigate } from 'react-router-dom'
import Filters from '../Filters/Filters'

function DisplayResults({apiCall}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    let pageNum = useSelector(state => state.games.pageNum)
    const [isLoadedList, setIsLoadedList] = useState(false) 
    const [previousLocation, setPreviousLocation] = useState('')
    
    const getData = useCallback((apiName) => {
        
        setIsLoadedList(false)
        if (previousLocation !== location.pathname){
            dispatch(setPageNum(1))
            setPreviousLocation(location.pathname)
        }
        else {
            fetch(apiName)
            .then(res => res.json())
            .then(data => {
                dispatch(changeGameInformations(data.results))
                console.log(data)
                if (data.results.length === 0) {
                    navigate('../error')
                }
                setIsLoadedList(true) 
            })        
        }        
        
    }, [dispatch, location.pathname, navigate, previousLocation]
    )
    useLayoutEffect(() => {
        getData(apiCall)
    }, [pageNum, apiCall, getData])

    if (!isLoadedList) {
        return (
            <div className="pos-center">
                <Spinner />
            </div>
        )
    }
    else {
        return (
            <div>
                <Filters getData={getData} apiCall={apiCall}/>
                <GamesDisplay />
                <PageButtons />
            </div> 
        )
    }
}

export default DisplayResults