<<<<<<< HEAD
import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
=======
import React from 'react'
import{ useState, useEffect } from 'react'
import NewsItem from './NewsItem';
>>>>>>> e233ae9 (This is a news app)
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

<<<<<<< HEAD
const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '56px' }}>Insight News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem theme={props.theme} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general',
}
=======
const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  const updateNews = async() =>{
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url); 
      props.setProgress(30);
      let parseData = await data.json()
      props.setProgress(70);
      setArticles(parseData.articles)
      setTotalResults(parseData.totalResults)
      setLoading(false)
      props.setProgress(100);
  }  

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, [])
  
  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url); 
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };
    
    return (
      <div className='container my-3'>
        <h1 className="text-center" style = {{margin: '35px 0px', marginTop: '60px'}}>Insight News- Top {capitalizeFirstLetter(props.category)} Headlines </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles?articles.length:0}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          { articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                <NewsItem  theme={props.theme} title={element.title?element.title.slice(0, 45):""} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            
          })}
        </div>
        </div>

        </InfiniteScroll>
      </div>

    )
}

News.defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general',
  }
>>>>>>> e233ae9 (This is a news app)

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
<<<<<<< HEAD
}

export default News
=======
  }

export default News;
>>>>>>> e233ae9 (This is a news app)
