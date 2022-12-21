import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={'flex justify-between items-center h-[50px] px-5'}>
            <h3> Github Search </h3>

            <span>
                <Link to={'/'}>Home</Link>
                <Link to={'/favorites'}>Favorites</Link>
            </span>
        </nav>
    );
};

export default Navigation;