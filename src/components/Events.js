import React from 'react'

export default function Events(props) {
    return (
        <>
            {props.events.map((event, index) => (
                <div className="card my-3" style={{width:"18rem"}}>
                    <div key={index}>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#868e96"></rect>
                            <text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                        </svg>
                        <div className="card-body">
                            <h3 className="card-title">{event.title}</h3>
                            <p className="card-text">Date: {event.date}</p>
                            <p className="card-text">Location: {event.location}</p>
                            <p className="card-text">{event.description}</p>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
