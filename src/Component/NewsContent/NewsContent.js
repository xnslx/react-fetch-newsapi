import React from 'react';
import { withRouter } from 'react-router-dom';
const NewsContent = (props) => {
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
        </div>
    )
}


export default withRouter(NewsContent);