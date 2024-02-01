import React, { useEffect, useState } from 'react'
import pizza from '../assets/pizza.jpg'
import { useCartDispatch, useCartState } from './ContextReducer'
export default function Card({ food, options }) {
    let priceOptions = Object.keys(options)
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState(priceOptions[0])
    let finalPrice = qty * parseInt(options[size])
    const dispatch = useCartDispatch();
    const cart = useCartState()
    const handleAddToCart = async () => {
        let sameFood = []
        for (let value of cart) {
            if (value.id == food._id) {
                sameFood = value
            }
            break;
        }
        if (sameFood != []) {
            if (sameFood.size == size) {
                await dispatch({ type: 'UPDATE', id: food._id, price: finalPrice, qty: qty })
                return
            } else if (sameFood.size != size) {
                await dispatch({ type: "ADD", id: food._id, name: food.name, price: finalPrice, img: food.img, qty: qty, size: size })
            }
        } 
        else {
            await dispatch({ type: "ADD", id: food._id, name: food.name, price: finalPrice, img: food.img, qty: qty, size: size })
        }
    }
    useEffect(() => {
        if (!cart.length == 0) {
            console.log(cart)
        }
    }, [cart])

    return (
        <div>
            <div className="card mt-5 " style={{ width: "18rem", maxHeight: '40rem', margin: '0 1rem' }}>
                <img src={food.img} className="card-img-top" alt="..." style={{ objectFit: 'fill', height: '12rem' }} />
                <div className="card-body">
                    <h5 className="card-title">{food.name}</h5>
                    {/* <p className="card-text">some important text .</p> */}
                    <div className="container w-100">
                        <select className='m-2 w- h-100 rounded' style={{ background: '#00bc8c' }} onChange={(e) => setQty(e.currentTarget.value)}>
                            {
                                Array.from(Array(6), (value, i) => {         //dropdown
                                    return <option key={i + 1} value={i + 1}>{i + 1}</option>
                                })
                            }
                        </select>
                        <select className='m-2 w- h-100 rounded' style={{ background: '#00bc8c' }} onChange={(e) => {
                            setSize(e.currentTarget.value)
                            console.log(e.currentTarget.value)
                        }}>
                            {
                                priceOptions.map((value) => {
                                    return <option value={options.value} key={value}>{value}</option>
                                })
                            }
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-success ms-1' onClick={handleAddToCart}> Add to cart</button>
                </div>
            </div>
        </div>
    )
}
