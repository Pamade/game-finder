import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageNum } from '../features/games/gamesSlice'
function PageButtons() {

    const dispatch = useDispatch()
    const gameInformations = useSelector(state => state.games.gameInformations)
    let pageNum = useSelector(state => state.games.pageNum)
    const nextPage = () => dispatch(setPageNum(pageNum += 1))
    const previousPage = () => {
        dispatch(setPageNum(pageNum -= 1))
    }

    return (
        <div className="button-page">
            {pageNum !== 1 ?<button className="button-page__btn" onClick={previousPage}>{pageNum - 1}</button> : ''}
            <button className="button-page__btn--current button-page__btn">{pageNum}</button>
            {gameInformations.length === 20 ?<button className="button-page__btn" onClick={nextPage}>{pageNum + 1}</button> : ''}
        </div>
    )
}

export default PageButtons