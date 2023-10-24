import React from 'react';
import './pageTitle.css';

const TitleUser = ({ title}) => {
    return (
        <>
            <section className="page-title justify-c align-c">
            <h2>{title}</h2>
            </section>
        </>
    );
};

export default TitleUser;