import React from 'react';
import styles from './breadcrumbs.module.css';
import breadCrumbImage from '../../assets/images/breadcrumbs2.jpg';

const Breadcrumbs = () => {
    return (
        <div className={styles.wrapper}>
            <img src={breadCrumbImage} alt="" className={styles.img} />
            {/* <h1>Title</h1>
            <p className={styles.breadcrumb}>Home &#8594; Page</p> */}
        </div>
    );
};

export default Breadcrumbs;