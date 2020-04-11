import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './Component/Pagination/Pagination';
import News from './Component/News/News';
import {BrowserRouter } from 'react-router-dom';

function App() {
  const [ loading, setLoading] = useState(false);
  const [ news, setNews ] = useState([]);
  const [numbersPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchNews = async() => {
      setLoading(true);
      const res = await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=e9f5217c460c42f7826f02144e6c573c')
      setNews(res.data.articles);
      setLoading(false)
    }
    fetchNews();
  }, [])

  const indexOfLast = currentPage * numbersPerPage;
  const indexOfFirst = indexOfLast - numbersPerPage; 
  const currentNews = news.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log(news)

  const newsDetailHandler = (id) => {
    console.log(id)
  }
  return (
    <BrowserRouter>
      <div>
        <div>
          <h1 style={{textAlign: 'center'}}>
            Coronavirus News
          </h1>
          <News news={news} loading={loading} showNewsDetail={newsDetailHandler}/>
        </div>
        {/* <Pagination news={news} totalNews={news.length} numbersPerPage={numbersPerPage} paginate={paginate}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
