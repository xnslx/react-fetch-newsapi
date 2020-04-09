import React from 'react'

const NewsContent = ({news}) => {
    console.log(news)
    return (
        <div>
            {news.map(item => (
                <div>
                    <img src={item.urlToImage} alt="newsImage" />
                    <h2>{item.titel}</h2>
                    <h4>{item.content}</h4>
                </div>
            ))}
        </div>
    )
}

export default NewsContent;
