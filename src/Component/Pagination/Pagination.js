import React from 'react';
import classes from './Pagination.module.css';

const Pagination = ({news, totalNews, numbersPerPage, paginate}) => {
    const pageNumber = [];

    for (let i =1; i <= totalNews/numbersPerPage; i++) {
        pageNumber.push(i)
    }
    return (
        <ul style={{textAlign: 'center', padding: 0}}>
            {pageNumber.map(number => (
                <li className={classes.List}>
                    <a href="!#" onClick={() => paginate(number)}>{number}</a>
                </li>
            ))}
        </ul>
    )
}

export default Pagination;