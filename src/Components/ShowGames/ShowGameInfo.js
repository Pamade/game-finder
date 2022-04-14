import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeWindowState } from '../features/games/gamesSlice'
import Spinner from '../Spinner/Spinner'
import Chart from './Chart'

const ShowGameInfo = ({gameId}) => {
    
    const [gameDetails, setGameDetails] = useState({})
    const [isLoadedGameDetails, setIsLoadedGameDetails] = useState(true)
    const isWindowHidden = useSelector(state => state.games.isWindowHidden)
    const dispatch = useDispatch()
    
    useEffect(() => {
        
        if (gameId !== 0) {
            fetch(`https://api.rawg.io/api/games/${gameId}?key=7597f52c3a1b4d5d82caf6b0437c43eb&search_exact`)
            .then(res => res.json())
            .then(data => {
                setGameDetails(
                    {
                        id: data.id,
                        name: data.name,
                        backgroundImage: data.background_image,
                        description: data.description_raw,
                        genres: data.genres,
                        ratings: data.ratings,
                        metacritics: data.metacritics,
                        redditUrl: data.reddit_url,
                        released: data.released,
                        website: data.website
                    }
                )  
                setIsLoadedGameDetails(true)
                }     
            )
            setIsLoadedGameDetails(false)
        }
        
    }, [gameId]
    )

    const hideGameInfo = () => {
        dispatch(changeWindowState(false))
    }
    
    return (
        <>
            {!isLoadedGameDetails && gameDetails ?  <div className="pos-center">
                <Spinner />
            </div> : ''}
            <div className="game-details" style={{display:`${!isWindowHidden ? 'none' : 'block'}`, backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(` + gameDetails.backgroundImage + ')'}}>
                <div>
                    <div className="game-details__informations">
                        <p className="game-details__name">{gameDetails.name}</p>
                        <p className="game-details__release">Release Date: {gameDetails.released || 'unknown'}</p> 
                        <p>{gameDetails.genres?.map(genre => <span key={genre.name} className="game-details__genre">{genre.name}</span>)} </p>
                    </div>
                    <div>
                        <div className="game-details__container-description-ratings">
                            <div className="game-details__box-description">
                                <p>{gameDetails.description !== '' ? gameDetails.description : 'description is not available'}</p>
                            </div>
                            <div className="game-details__box-ratings">  
                                <p>RATINGS</p>
                                <Chart details={gameDetails}/>
                            </div>
                        </div>
                    </div>
                    <div className="game-details__links">
                        {gameDetails.redditUrl !== '' ?<a className="game-details__links-link" target="_blank" rel="noreferrer" href={gameDetails.redditUrl}><img style={{width:'3rem'}} src="https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png" alt="reddit"/></a>: null}
                        {gameDetails.website !== '' ? <a className="game-details__links-link" target="_blank" rel="noreferrer" href={gameDetails.website}><img style={{width:'3rem'}} src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png" alt="website"/></a> : null}
                     </div>
                    <div className="game-details__close-mark" onClick={hideGameInfo}>X</div>                
                </div>
            </div>   
        </> 
    )
   
    
    

}

export default ShowGameInfo