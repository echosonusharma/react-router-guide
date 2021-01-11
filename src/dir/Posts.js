import * as React from 'react';

const posts = ({ match }) => {
    console.log(match)

    // React.useEffect(() => {
    //     fetch(`api.example.com/posts/${match.params.id}`)
    // }, [match.params.id]) 
    // example of how to use the id in a way

    return (
        <div>
            <h2>post {match.params.id}</h2>
        </div>
    )
}

export default posts;

// match gives you the params id as what ever the dynamic path input is 
// and you can use that id to do anything in the application