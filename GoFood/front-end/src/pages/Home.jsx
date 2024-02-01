import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import Card from '../components/Card'
import axios from 'axios'

export default function Home() {
    const [search,setSearch]=useState('')
    const [foodCategory, setFoodCategory] = useState([])
    const [foodItems, setFoodItems] = useState([])
    useEffect(() => {
        async function loadedData() {
            const loadedData = (await axios.get('http://localhost:5000/api/foodData'))
            // console.log(loadedData.data)
            setFoodCategory(loadedData.data[1])
            setFoodItems(loadedData.data[0])
            console.log('foodCategory:', foodCategory)
            console.log('foodItems:', foodItems)
        }
        loadedData()
    }, [])
    return (
        <div>
            <div> <NavigationBar /></div>
            <div className="">

                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>

                    <div className="carousel-inner">
                        <div className="carousel-caption d-none d-md-block" style={{ color: 'white', zIndex: '10' }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.currentTarget.value)}} />
                                {/* <button className="btn btn-outline-success" type="submit" style={{ color: 'white', backgroundColor: '#00bc8c' }}>Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src={"https://source.unsplash.com/random/900×700/?fruit"} style={{ height: '30rem', opacity: '0.5' }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://source.unsplash.com/random/900×700/?burger"} style={{ height: '30rem', opacity: '0.5' }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://source.unsplash.com/random/900×700/?icecream"} style={{ height: '30rem', opacity: '0.5' }} className="d-block w-100" alt="..." />
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
            <div className='m-3' style={{}} >
                {
                    foodCategory != [] ? foodCategory.map((value,index) => {
                        return (
                            <div className='row mb-3' key={index} >
                                <div key={value._id} className='fs-3 m-3'>{value.CategoryName}</div>
                                <hr />
                                {   
                                //search logic below
                                    foodItems != [] ? foodItems.filter(item => (item.CategoryName === value.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map(food => {
                                        return <div key={food._id} className='col-12 col-md-6 col-lg-3'>
                                            <Card food={food} options={food.options[0]}  />
                                        </div>
                                    }) : <div></div>
                                }
                            </div>)
                    }) : <div></div>
                }
                {/* <Card /> */}
            </div>
            <div><Footer /></div>
        </div>
    )
}
