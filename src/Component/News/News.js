import React from 'react';
import { log } from 'util';
import classes from './News.module.css';

const News = ({news, loading, showNewsDetail}) => {
    if(loading) {
        return (
            <div>loading...</div>
        )
    }
    return (
        <div className={classes.Container}>
            {news.map(article => (
                <div key={article.id} className={classes.Box}>
                    <img src={article.urlToImage} alt="newsImage" 
                    onClick={() => console.log('i am clicked')}/>
                    <h2>{article.title}</h2>
                    <h6>{article.publishedAt}</h6>
                    <h4>{article.content}</h4>
                </div>
            ))}
        </div>
    ) 
}

export default News;

