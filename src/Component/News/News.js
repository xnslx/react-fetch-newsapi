import React from 'react';
import classes from './News.module.css';
import { Route } from 'react-router-dom'; 

const News = ({news, loading, showNewsDetail}) => {
    if(loading) {
        return (
            <div>loading...</div>
        )
    }

    return (
        <div className={classes.Container}>
            {news.map((article, index) => (
                <div key={index} id={index} className={classes.Box}>
                    <img 
                        src={article.urlToImage} 
                        alt="newsImage" 
                        onClick={() => showNewsDetail(index)}
                    />
                    <h2>{article.title}</h2>
                    <h6>{article.publishedAt}</h6>
                    <h4>{article.content}</h4>
                </div>
            ))}
            {/* <Route path="/" exact component={NewsContent} /> */}
        </div>
    ); 
}

export default News;

