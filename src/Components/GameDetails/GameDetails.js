import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {changeWindowState} from '../features/games/gamesSlice'
import ShowGameInfo from '../ShowGames/ShowGameInfo'

function GameDetails() {
    
    const dispatch = useDispatch()
    const [gameId, setGameId] = useState(0)
    const showGameInfo = (id) => {
        setGameId(id)
        dispatch(changeWindowState(true))
    }

    const gameInformations = useSelector(state => state.games.gameInformations)
    const gamesDisplay = gameInformations?.map((game) =>
        <div key={game.id} onClick={showGameInfo.bind(this, game.id)} className="games__game">
            <div className="games__top-info">
                <p className="games__title">{game.name} <span className="games__metacritic">{game.metacritic || '?'}</span></p>
            </div>
            <div className="games__image"  style={{backgroundImage: `url(${game.background_image || 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'})`}} ></div>
            <p style={{alignSelf:'center', textAlign:'center'}}>{game.genres.map((genre, index) => <span key={index} className="games__genre">{genre.name}</span>)}</p>
        </div>
    );

    return (
        <>
            <ShowGameInfo gameId={gameId} />
            <div className="games">
                {gamesDisplay}      
            </div>
        </>
    )
}

export default GameDetails