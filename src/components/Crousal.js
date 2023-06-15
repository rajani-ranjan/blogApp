import React from 'react'

export default function Crousal() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.xaxis.com/wp-content/uploads/2019/10/Tech-Blog-Preview.png" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.yourspost.com/storage/uploads/images/tech-blogs.jpg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.agencycentral.co.uk/articles/wp-content/uploads/2022/06/techbloggers.jpg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
