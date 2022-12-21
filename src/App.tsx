import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import Navigation from "./components/Navigation";
import {useSearchUsersQuery} from "./store/github/github.api";

function App() {

    const {isLoading, isError, data} = useSearchUsersQuery('oleg')


    return (
        <>
            <Navigation/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/favorites'} element={<FavouritesPage/>}/>
            </Routes>
        </>
    );
}

export default App;
