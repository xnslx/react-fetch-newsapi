import React from 'react';
import { Route } from 'react-router-dom';
import FullNews from '../FullNews/FullNews';

const NewsContent = (props) => {
    // console.log(props)
    return (
        <div>
            <div key={props.key} id={props.index}>
                    <img 
                        src={props.urlToImage} 
                        alt="newsImage" 
                        onClick={props.clicked}
                    />
                    <h2>{props.title}</h2>
                    <h6>{props.publishedAt}</h6>
                    <h4>{props.content}</h4>
            </div>
            {/* <Route path={props.match.url + '/:index'} exact component={FullNews}/> */}
        </div>
    )
}


export default NewsContent;