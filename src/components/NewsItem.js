<<<<<<< HEAD
import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
=======
import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source, theme } = props;

    return (
      <div className="my-3">
        <div className={`card ${theme === 'dark' ? 'card-dark' : 'card-light'}`} style={{ height: "100%" }}>
        <div style={{
>>>>>>> e233ae9 (This is a news app)
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
<<<<<<< HEAD
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
=======
                    }>
                        
        <span className=" badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
        {source}
        </span>
        </div>
          <img src={
              imageUrl? imageUrl: "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
            } className="card-img-top" alt="..."/>
          <div className="card-body"><h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
>>>>>>> e233ae9 (This is a news app)
