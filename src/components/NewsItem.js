import React, { useState} from 'react';
import Spinner from './Spinner'; 

const NewsItem = (props) => {
    const { title, description, imageUrl, newsUrl, author, date, source } = props;
    const [summary, setSummary] = useState(""); 
    const [loadingSummary, setLoadingSummary] = useState(false); 
    const [showSummary, setShowSummary] = useState(false); 

    // fetch the summary from Hugging Face API
    const fetchSummary = async (text) => {
        setLoadingSummary(true); 
        try {
            const inputText = text && text.trim().length > 0 ? text : "No description available."; 

            const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer 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`, 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    inputs: inputText, 
                    parameters: { max_length: 100, min_length: 50 } 
                })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch summary');
            }

            const data = await response.json();
            if (data && data[0] && data[0].summary_text) {
                setSummary(data[0].summary_text); 
            } else {
                setSummary("No summary available.");
            }
        } catch (error) {
            console.error("Error fetching summary:", error);
            setSummary("Could not fetch summary at this time.");
        }
        setLoadingSummary(false); // Set loading state to false after fetching summary
    };

    const handleSummaryToggle = () => {
        setShowSummary(!showSummary);

        if (!showSummary && description) {
            fetchSummary(description); 
        }
    };

    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button 
                        className="btn btn-sm btn-info btn-dark" 
                        onClick={handleSummaryToggle}
                    >
                        {showSummary ? "Hide Summary" : "Show Summary"}
                    </button>

                    {showSummary && (
                        <>
                            {loadingSummary ? (
                                <Spinner /> 
                            ) : (
                                <p className="card-text"><strong>Summary:</strong> {summary}</p>
                            )}
                        </>
                    )}

                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
