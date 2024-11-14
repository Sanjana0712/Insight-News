import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
    
        try {
            let data = await fetch(url);
            props.setProgress(30);
            let parsedData = await data.json();
            props.setProgress(70);
            
            // Fetch summaries for each article
            const articlesWithSummary = await Promise.all(parsedData.articles.map(async (article) => {
                const summary = await fetchSummary(article.description);
                return { ...article, summary };
            }));
    
            setArticles(articlesWithSummary);
            setTotalResults(parsedData.totalResults);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
            props.setProgress(100);
        }
    };
    //Fetch summary
    const fetchSummary = async (description) => {
        try {
            const response = await fetch('https://api-inference.huggingface.co/models/t5-base', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer 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`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: `summarize: ${description}`,
                    parameters: { max_length: 100, min_length: 50 },
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch summary: ${response.status} ${response.statusText}`);
            }
    
            const data = await response.json();
            return data[0]?.summary_text || 'No summary available';
        } catch (error) {
            console.error('Error fetching summary:', error);
            return 'Error generating summary';
        }
    };
    

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

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
