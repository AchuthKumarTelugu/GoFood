import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:'contain !important'}}>

                <div className="carousel-inner">
                <div className="carousel-caption d-none d-md-block" style={{  color: 'white',zIndex:'10'}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit" style={{color:'white',backgroundColor:'#00bc8c'}}>Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src={"https://source.unsplash.com/random/900×700/?fruit"} style={{  height: '30rem', opacity: '0.5' }} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={"https://source.unsplash.com/random/900×700/?burger"} style={{  height: '30rem', opacity: '0.5' }} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={"https://source.unsplash.com/random/900×700/?icecream"} style={{  height: '30rem', opacity: '0.5' }} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
