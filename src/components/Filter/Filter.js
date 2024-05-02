import React, { useState } from 'react';
import styles from './filter.module.css';
import filterIcon from '../../assets/img/filter-icon.png';
import gridViewImg from '../../assets/img/grid-view-icon.png';
import listViewImg from '../../assets/img/list-view-icon.png';


const Filter = ({setCategoryFilter,categoryFilter, setListView}) => {
    
    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img className={styles.icons} src={filterIcon} alt="" />
                    <p className={styles["filter-text"]}>Filter</p>
                    <img className={styles.icons} src={gridViewImg}  alt="" onClick={() => setListView(false)}/>
                    <img className={styles.icons}src={listViewImg}  alt="" onClick={() => setListView(true)}/>
                    {/* <p className={styles["amount-text"]}>Showing 1-16 of 32 results</p> */}
                </div>
                <div className={styles.controls}>
                    {/* <p className={styles.amount}>
                        Show
                        <input type="number" className={styles["amount-number"]}/>    
                    </p> */}
                    <p>
                        Sort by 
                        <select onChange={e => setCategoryFilter(e.target.value)} value={categoryFilter}>
                            <option value="All">All</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Master's">Master's</option>
                            <option value="PhD">PhD</option>
                            <option value="Thematic">Thematic Scholarships</option>
                        </select>
                    </p>    
                </div>    
            </div>
        </div>
    );
};

export default Filter;