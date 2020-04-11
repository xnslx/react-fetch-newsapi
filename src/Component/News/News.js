import React from 'react';
import classes from './News.module.css';
import NewsContent from '../NewsContent/NewsContent';
import { Route } from 'react-router-dom';

const News = (props) => {
    if(props.loading) {
        return (
            <div>loading...</div>
        )
    }

    return (
        <div>
            <div className={classes.Container} >
                {props.news.map((article, index) => (
                    <NewsContent 
                        key={article.key}
                        id={index}
                        urlToImage={article.urlToImage}
                        title={article.title}
                        publishedAt={article.publishedAt}
                        content={article.content}
                        clicked={() => props.showNewsDetail(index)}
                    />
                ))}
            </div>
            {/* <Route path="/:index" component={NewsContent}/> */}
        </div>
    ); 
}

export default News;

