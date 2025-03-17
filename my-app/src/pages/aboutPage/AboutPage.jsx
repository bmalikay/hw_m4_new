import React from 'react';
import Description from "../../components/description/Description";
import styles from "./aboutPage.module.css";

function AboutPage() {
    const data ={
        title:"About Page",
        description:"About description"
    }
    return (
        <div className={styles.aboutPage}>
            <Description data={data} />
        </div>
    );
}

export default AboutPage;