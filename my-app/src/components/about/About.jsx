import React from 'react';

function About(props) {
    return (
        <div>
            <h2>{props.info.title}</h2>
            <p>{props.info.body}</p>
        </div>
    );
}

export default About;