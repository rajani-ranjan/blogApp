import React from 'react'

export default function NewsFeeds(props) {
    return (
        <>
            {props.newsFeeds.map((news, index) => (
                <div className="card my-3" style={{ width: "18rem" }}>
                    <div key={index}>
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="180px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#868e96"></rect>
                            <text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                        </svg>
                        <div className="card-body">
                            <h3 className="card-title">{news.title}</h3>
                            <p className="card-text">{news.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
