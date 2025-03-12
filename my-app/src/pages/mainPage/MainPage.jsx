import React from 'react';
import About from "../../components/about/About";
import Title from "../../components/title/Title";



function MainPage(props) {
    return (
        <div>
            <Title text="Hello world" />
            <About info={{title: " Title", body: " body"}} />
        </div>
    );
}

export default MainPage;