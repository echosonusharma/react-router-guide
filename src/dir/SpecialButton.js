import React from 'react';
import { withRouter } from 'react-router-dom';

const SpecialButton = withRouter(({ history }) => {
    return (
        <div>
            <button
                onClick={() =>
                    history.push('/posts/special')
                }>go to post Special</button>

        </div>
    )
});

export default SpecialButton;

// with router is a higher order component that gives us all the information about the page