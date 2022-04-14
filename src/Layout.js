import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Games from './Components/Games/Games';
import Home from './Components/Home/Home'
import Error from './Components/Error/Error';
import GamesByGenres from './Components/Games/GamesByGenres'
import Search from './Components/Search/Search'
import Genres from './Components/Genres/Genres'

const Layout = () => {

    return ( 
        <div className="wrapper">
            <header>
                <h1>Game Finder</h1>
                <Search />
                <Genres />
            </header>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="*" element={<Error />} />
                <Route path="games/:title/" element={<Games />} />
                <Route path="genres/:genre/" element={<GamesByGenres />}/>
            </Routes>
        </div>
     );
}
 
export default Layout;