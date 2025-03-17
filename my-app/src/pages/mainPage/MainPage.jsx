import React from 'react';
import Description from "../../components/description/Description";
import styles from './mainPage.module.css'

function MainPage() {
    const data = {
        title: "Title",
        description: "description"
    };

    return (
        <div className={styles.mainPage}>
            <Description data={data} />
        </div>
    );
}

export default MainPage;
