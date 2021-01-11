import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const postId = 5;
    return (
        <div>
            <h2>About 0</h2>
            <Link to={`/posts/ ${postId}`}>go to post 1</Link>

        </div >
    )
}

export default About;
