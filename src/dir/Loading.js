import React from 'react';
import { Link } from 'react-router-dom';

import SpecialButton from './SpecialButton';

const Loading = ({ history, location, match }) => {
    console.log(location); // to get the search query string in the path with location.search
    console.log(match); // 
    return (
        <div>
            <h1>loading...</h1>
            <Link to='/about'>go to about</Link>
            <button
                onClick={() =>
                    // api call
                    // change to about page 
                    history.push('/about')
                }>go to about page</button>
            <SpecialButton />
        </div>
    )
}

export default Loading;
