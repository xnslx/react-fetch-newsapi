import React from 'react';
import classes from './News.module.css';
import NewsContent from '../NewsContent/NewsContent';
import { Route, Link } from 'react-router-dom';

const News = (props) => {
    console.log(props)
    if(props.loading) {
        return (
            <div>loading...</div>
        )
    }
    return (
        <div>
            <div className={classes.Container} >
                {props.news.map((article, index) => (
                    <Link style={{textDecoration: 'none'}} key={article.index} to={{
                        pathname: "/" + index
                    }}>
                        <NewsContent
                            id={index}
                            urlToImage={article.urlToImage}
                            title={article.title}
                            publishedAt={article.publishedAt}
                            content={article.content}
                            clicked={() => props.showNewsDetail(index)}
                        />
                    </Link>
                ))}
            </div>
            <Route path="/:index" component={NewsContent}/>
        </div>
    ); 
}

export default News;

